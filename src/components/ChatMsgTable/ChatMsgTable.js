import React, { PropTypes } from 'react';
import './main.less';

import MessageRow from '../MessageRow';

class ChatMsgTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {autoScroll:true}
        this.autoScrollToggle = this.autoScrollToggle.bind(this);
    }
    componentDidUpdate() {
        if(this.state.autoScroll) {
            this.scrollToBottom();
        }
    }
    scrollToBottom() {
            this.messagesTable.scrollTop = this.messagesTable.scrollHeight;
    }
    autoScrollToggle() {
        this.setState((prevState) => {
            return {
                autoScroll:!prevState.autoScroll
            }
        })
    }
  render() {
        const auto = this.state.autoScroll,
              buttonText = (auto ? 'Disable' : 'Enable') + ' auto scroll',
              messages = this.props.messages.map((msg, i) => <MessageRow msg={msg} key={i}/>)
    return (
        <div className='messages_button_container'>
          <div className='chat_messages_table' 
            ref={(messagesTable) => {this.messagesTable = messagesTable}}>
            { messages }
          </div>
            <button type='button' onClick={this.autoScrollToggle}
                className='auto_scroll_toggle'>
                    { buttonText } 
            </button>
        </div>
    );
  }
}

ChatMsgTable.propTypes = {
    messages:PropTypes.arrayOf(PropTypes.shape({
        author:PropTypes.string,
        text:PropTypes.string,
        date:PropTypes.string
    }))
}

export default ChatMsgTable;