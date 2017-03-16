export default function(io, db) {
    const chatIo = io.of('/api/chat');
    chatIo.on('connection', (socket) => {
        let USERNAME;
        socket.on('set username', userName => {
            console.log('user connected : ' + userName);
            USERNAME = userName;
        });
        
        socket.join('Lobby');
        socket.on('get primary list of channels', () => {
            console.log('отправляем список каналов');
            db.getLobbyChannelsList().then((channels) => {
                console.log('создатель первого чата в списке ' + channels[0].creator);
                if ( channels instanceof Array ) {
                    console.log('channels is Array');
                }
                let list = 
                channels.map((channel) => {
                    let result = channel;
                    result.members = result.members.length;
                    return result;
                });
                chatIo.to(socket.id).emit('primary list of channels', list);
            });
        });
        socket.on('create channel', (data) => {
            console.log('create channel emited');
            console.log('USERNAME v create channel emiited = ' + USERNAME);
            db.createChannel({
                creator: USERNAME,
                title:   data.title
            });
            console.log(JSON.stringify(data));
        })
        socket.on('is user exist', (data) => {
            console.log('emit is came on server');
            db.isUserExist(data).then((user) => {
                if(user){
                    console.log(user.userLogin);
                    chatIo.to(socket.id)
                        .emit('user exist info', { isUniqueLogin: false });
                } else {
                    console.log('уникальный');
                    chatIo.to(socket.id)
                        .emit('user exist info', { isUniqueLogin: true });
                }
            });
        });
        socket.on('sign up', (data) => {
            console.log('рег нового пользователя');
            db.createUser(data);
        });
        socket.on('join channel', (data) => {
            console.log('предыдущий канал пришел в сокет евенты : ' + data.prevChannel);
            console.log('будущий канал пришел в сокет евенты : ' + data.nextChannel);
            console.log('юзер пришел в сокет евенты : ' + data.username);
            const { prevChannel, nextChannel } = data;
            if(prevChannel){
                socket.leave(prevChannel);
                db.userExitChannel(USERNAME, prevChannel);
            }
            
            db.userJoinToChannel(USERNAME, nextChannel);
            db.getMessages(nextChannel).then(messages => {
                messages.forEach(message => {
                    console.log('author : ' + message.author + 'text : ' + message.text + 'date : ' + message.date)
                    });
                socket.emit('messages from server', { channel:nextChannel, messages });
                socket.join(nextChannel);
            }, err => console.log(err));
            
        });
        socket.on('message from client', data => {
            const { activeChannel, messageText } = data,
                  message = {
                      author: USERNAME,
                      date: new Date,
                      text: messageText
                  };
            console.log('message from client : ' + message);
            console.log('active channel ' + activeChannel);
            //Добавляем сообщение в экземпляр канала в БД, чтобы при входе в канал
            //другие юзеры получали все сообщения.
            //db.addMessageToChannel(activeChannel, message);
            chatIo.to(activeChannel).emit('message from server', message);
        })
    });
}