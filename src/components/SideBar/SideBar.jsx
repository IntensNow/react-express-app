import React from 'react';
import './main.less';
import { connect } from 'react-redux';

//import * as actions from '../../actions';

import { receiveChannels, joinChannel, addMessagesFromDB } from '../../Actions';

import UserBox from '../UserBox';
import SearchBar from '../SearchBar';
import CreateChannel from '../../containers/CreateChannel';

const ChannelRow = props => {
  const classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',
  { title, creator, members } = props.channel;
  return (
    <li className={classTitle}>
      <div> Title: {title} </div> <div> Members: {members} </div>
      <div> Creator: {creator} </div> 
      <div> 
      { //show button if channel is not active;
            title !== props.activeChannel && 
        <input type='button' 
               value='Join the chat' 
               name={title}
               onClick={props.onJoinChannel}
               className='join_chat_button'/>
      }
       </div>
    </li>
  );
};
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublicOnly:false,
            searchText:''
        }
        this.onJoinChannel  = this.onJoinChannel.bind(this);
        this.onPublicChange = this.onPublicChange.bind(this);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.reloadChannels = this.reloadChannels.bind(this);
    }
    componentDidMount() {
        const { socket, dispatch } = this.props;
        socket.on('primary list of channels', (list) => {
            console.log('диспатчим список каналов' + list[0].members);
            
            dispatch(receiveChannels(list));
        });
        socket.on('messages from server', (data) => {
            console.log('сообщения пришли с БД');
           dispatch(addMessagesFromDB(data.channel, data.messages)); 
        });
        socket.emit('get primary list of channels');
    }
    onPublicChange() {
        this.setState(prevState => {
            return {
                isPublicOnly:!prevState.isPublicOnly
            }
        });
    }
    onSearchTextChange(e) {
        this.setState({
                searchText:e.target.value
        });
    }
    reloadChannels() {
        const socket = this.props.socket;
        socket.emit('get primary list of channels');
    }
    onJoinChannel(e) {
        const nextChannel = e.target.name,
              { activeChannel, dispatch, socket } = this.props,
              data = {
                  prevChannel: activeChannel,
                  nextChannel
              };
        socket.emit('join channel', data);
        dispatch(joinChannel(nextChannel));
    }
  render() {
      const toLowTrim = (string) => string.trim().toLowerCase();
      const channels = [];
      if(this.props.channels)
      this.props.channels.forEach((c, idx) => {
          if (c.title.toLowerCase().indexOf(toLowTrim(this.state.searchText)) === -1 && 
              c.creator.toLowerCase().indexOf(toLowTrim(this.state.searchText)) === -1) {
              return 
          }
          if (this.state.isPublicOnly && c.isPrivate){
              return
          }
          channels.push( <ChannelRow channel={c} 
                                     onJoinChannel={this.onJoinChannel}
                                     activeChannel={this.props.activeChannel} 
                                     key={idx}/> );
    });
    return (
        <div className='col-xs-12 col-sm-3'>
          <aside className='side_bar'>
            <UserBox user={{name:'Daniil', family:'korobskoy'}}/>
            <SearchBar isPublicOnly={this.state.isPublicOnly}
                       searchText={this.state.searchText}
                       onPublicChange={this.onPublicChange}
                       onSearchTextChange={this.onSearchTextChange}
                       />
            <CreateChannel createChannel={this.props.createChannel}/>
            <div >
                <input className='reload_channels_button'
                       type='button' 
                       onClick={this.reloadChannels}
                       value='Refresh channels'
                        />
                <ul className='channels' > {channels} </ul>
            </div>
          </aside>
        </div>
    );
  }
}

SideBar.propTypes = {
    activeChannel:React.PropTypes.string,
    createChannel:React.PropTypes.func,
    username:React.PropTypes.string,
    socket:React.PropTypes.object,
    channels: React.PropTypes.arrayOf(React.PropTypes.shape({
        title:React.PropTypes.string,
        creator:React.PropTypes.string,
        members:React.PropTypes.number,
        isPrivate:React.PropTypes.bool,
        socket:React.PropTypes.object
  }))
}
    
const mapStateToProps = (state) => ({
    activeChannel: state.channels.active.title,
    channels:state.channels.list,
    username:state.user.name
});

const mapDispatchToProps = (dispatch) => ({
   dispatch(data){
       dispatch(data);
   }
});
    
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);