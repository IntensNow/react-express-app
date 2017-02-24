import React, { PropTypes } from 'react';
import './main.less';

import ChatMsgTable from '../ChatMsgTable';

class ChatBox extends React.Component {
  render() {
    return (
        <div className='col-xs-12 col-sm-7'>
          <div className='chat_box'>
            <header className='chat_heading'>
                <p>Vova</p>
            </header>
            <ChatMsgTable messages={this.props.messages} />
            <textarea placeholder='Ваше сообщение...'/>
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
    }))
}
export default ChatBox;