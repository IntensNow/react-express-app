import React from 'react';
import './main.less';
import { connect } from 'react-redux';

//import * as actions from '../../actions';

import UserBox from '../UserBox';
import SearchBar from '../SearchBar';
import CreateChannel from '../../containers/CreateChannel';

const ChannelRow = props => {
  const classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',
  { title, creator, members } = props.channel;
  return (
    <li className={classTitle}>
      <div> Title: {title} </div> <div> Members: {members} </div>
      <div> Creator: {creator} </div> <div> <input type='button' value='Join the chat' className='join_chat_button'/> </div>
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
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onPublicChange = this.onPublicChange.bind(this);
    }
    componentDidMount() {
        const { socket, dispatch } = this.props;
        socket.on('primary list of channels', (data) => {
            console.log('диспатчим список каналов' + data[0].members);
            
            dispatch({type: 'ADD_CHANNELS', list: data});
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
          channels.push( <ChannelRow channel={c} key={idx}/> );
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
            <CreateChannel />
            <ul className='channels' > {channels} </ul>
          </aside>
        </div>
    );
  }
}

SideBar.propTypes = {
  channels: React.PropTypes.arrayOf(React.PropTypes.shape({
    title:React.PropTypes.string,
    creator:React.PropTypes.string,
    members:React.PropTypes.number,
    isPrivate:React.PropTypes.bool,
    socket:React.PropTypes.object
  }))
}
    
const mapStateToProps = (state) => ({
    channels:state.channels.list
});

const mapDispatchToProps = (dispatch) => ({
   dispatch(data){
       dispatch(data);
   }
});
    
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);