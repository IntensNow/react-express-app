import React from 'react';
import './main.less';
import { connect } from 'react-redux';

import { addSingleMessage, /*createChannel*/ } from '../../Actions';

import SideBar from '../../components/SideBar';
import ChatBox from '../../components/ChatBox';

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        }
        this.onMessageSend  = this.onMessageSend.bind(this);
        this.onWriteMessage = this.onWriteMessage.bind(this);
        this.createChannel  = this.createChannel.bind(this);
    }
    componentDidMount() {
        const { activeChannel, dispatchMessage, socket } = this.props;
        socket.on('message from server', message => {
            console.log('message from server : ' + message.messageText);
            dispatchMessage(message);
        });
        socket.emit('join channel', { nextChannel:activeChannel });
    }
    onMessageSend(e) {
        if (this.state.messageText.trim().length) {
            const { activeChannel, socket } = this.props;
            const data = { 
                activeChannel,
                messageText:this.state.messageText
            }
            socket.emit('message from client', data);
        }
        e.preventDefault();
    }
    
    onWriteMessage(e) {
        this.setState({ messageText:e.target.value });
    }
    
    createChannel(channelTitle) {
        const socket = this.props.socket;
        socket.emit('create channel', {
            title:channelTitle
        });
        socket.emit('get primary list of channels');
    }
    
    render() {
        const { messages, socket } = this.props;
        return (
            <div className='chat_container container'>
                <SideBar socket={socket} createChannel={this.createChannel}/>
                <ChatBox messages={messages} 
                         onWriteMessage={this.onWriteMessage}
                         onMessageSend={this.onMessageSend}
                         messageText={this.state.messageText}
                />
            </div> 
        );
    }
}

const mapStateToProps = store => ({
    
    messages:store.channels.active.messages,
    activeChannel:store.channels.active.title
    
});

const mapDispatchToProps = dispatch => ({
    
    dispatchMessage(message) {
        dispatch(addSingleMessage(message));
    }/*,
    dispatchCreateChannel(channelTitle) {
        createChannel(channelTitle);
    }*/
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);