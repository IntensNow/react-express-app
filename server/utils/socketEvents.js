export default function(io, db) {
    const chatIo = io.of('/api/chat');
    chatIo.on('connection', (socket) => {
        //socket.on('hey', (data) => console.log(data.hey));
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
            })
        })
        socket.on('create channel', (data) => {
            console.log('create channel emited');
            db.createChannel(data);
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
    });
}