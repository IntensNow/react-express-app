import React from 'react';
import { render } from 'react-dom';
import './main.css';
import Channels from './components/Channels';
import ChatBox from './components/ChatBox';
import CHANNELS from './CHANNELS_LIST';
import MESSAGES from './MESSAGES_LIST';
const mountingPoint = document.createElement('div');
mountingPoint.className = 'app';
document.body.insertBefore(mountingPoint, document.body.firstChild);
render(
    (
        <div className="container" >
            <Channels channels={CHANNELS}/>
            <ChatBox messages={MESSAGES}/>
        </div>
    ),
    mountingPoint  
);
