import React, { PropTypes } from 'react';
import './main.less';

import ChatMsgTable from '../ChatMsgTable';

class ChatBox extends React.Component {
  render() {
      const { messages, onMessageSend, onWriteMessage, messageText } = this.props;
    return (
        <div className='col-xs-12 col-sm-7'>
          <div className='chat_box'>
            <header className='chat_heading'>
                <p>Vova</p>
            </header>
            <ChatMsgTable messages={messages} />
            <form onSubmit={onMessageSend}>
                <textarea onChange={onWriteMessage} 
                          placeholder='Ваше сообщение...'
                          value={messageText}
                          />
                <input type="submit" value="Send"/>
            </form>
          </div>
        </div>
    );
  }
}

ChatBox.propTypes = {
    messages:PropTypes.arrayOf(PropTypes.shape({
        author:PropTypes.string,
        text:PropTypes.string,
        date:PropTypes.string
    })),
    onMessageSend:PropTypes.func,
    onWriteMessage:PropTypes.func,
    messageText:PropTypes.string
}
export default ChatBox;