import React from 'react';
import './main.css';
const ChannelRow = props => {
  const classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',
  { title, creator, members } = props.channel;
  return (
    <li className={classTitle}>
      <div> Title: {title} </div> <div> Members: {members} </div>
      <div> Creator: {creator} </div> <div> <input type="button" value="Join the chat" className="join_chat_button"/> </div>
    </li>
  );
};

class Channels extends React.Component {
  render() {
    const channels = this.props.channels.map((channel, idx) => {
      return <ChannelRow key={idx} channel={channel}/>
    });
    return (
      <ul className="channels">
        {channels}
      </ul>
    );
  }
}
class UserBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDropDownOpened: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState((prevState) => {
      return {
        isDropDownOpened: !prevState.isDropDownOpened
      }
    });
  }
  render() {
    const { name, family } = this.props.user,
          { isDropDownOpened } = this.state;
    return (
      <div className="user_box">
        <input type="button" 
               value={ name + " " + family } 
               onClick={this.handleClick}
               className="user_name_button"/>
        {isDropDownOpened && 
          <input type="button" value="Sign out" className="sign_out"/>}
      </div>
    );
  }
}
class SideBar extends React.Component {
  render() {
    return (
        <div className="col-xs-12 col-sm-3">
          <div className="side_bar">
            <UserBox user={{name:'Daniil', family:'korobskoy'}}/>
            <Channels channels={this.props.channels} />
          </div>
        </div>
    );
  }
}

class Community extends React.Component {
  render() {
    return (
      <div className="community">
        <SideBar channels={this.props.channels}/>
      </div>
    );
  }
}

Community.propTypes = {
  channels: React.PropTypes.arrayOf(React.PropTypes.shape({
    title:React.PropTypes.string,
    creator:React.PropTypes.string,
    members:React.PropTypes.number,
    isPrivate:React.PropTypes.bool
  }))
}
export default Community;