import React from 'react';
import './main.less';

import SideBar from '../../components/SideBar';
import ChatBox from '../../components/ChatBox';
import CHANNELS from '../../CHANNELS_LIST';
import MESSAGES from '../../MESSAGES_LIST';


export default () => {
    return (
        <div className='chat_container container'>
            <SideBar channels={CHANNELS} socket={this.props.socket}/>
            <ChatBox messages={MESSAGES}/>
        </div> 
    );
}
