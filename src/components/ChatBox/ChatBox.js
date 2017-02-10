import React from 'react';
import './main.css';
class MessageRow extends React.Component {
  render() {
    const { author, text, date } = this.props.msg;
    return (
      <div className={ author === "Me" ? "user_message_row" : "message_row" }>
        <header > <p>{author}</p> </header>
        <div className="message_text"><p>{text.trim()}</p></div>
        <div className="message_date"><p>{date}</p></div>
      </div>
    );
  }
}
class ChatMessagesTable extends React.Component {
  render() {
    return (
      <div className="chat_messages_table">
        {this.props.messages.map((msg, i) => <MessageRow msg={msg} key={i}/>)}
      </div>
    );
  }
}
class ChatHeading extends React.Component {
  render() {
    return (
      <header className="chat_heading">
        <p>{this.props.companion}</p>
      </header>
    );
  }
}
class ChatInputArea extends React.Component {
  render() {
    return (
      <textarea placeholder="Ваше сообщение..."/>
    );
  }
}
class ChatBox extends React.Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-7">
          <div className="chat_box">
            <ChatHeading companion={"Vova Putin"}/>
            <ChatMessagesTable messages={this.props.messages}/>
            <ChatInputArea />
          </div>
        </div>
    );
  }
}
export default ChatBox;