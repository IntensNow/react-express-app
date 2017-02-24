import React, { PropTypes } from 'react';
import './main.less';

class UserBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDropDownOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
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
      <div className='user_box'>
        <input type='button' 
               value={ name + ' ' + family } 
               onClick={this.handleClick}
               className='user_name_button'/>
        {isDropDownOpened && 
          <input type='button' value='Sign out' className='sign_out'/>}
      </div>
    );
  }
}

UserBox.propTypes = {
    user:PropTypes.shape({
        name:PropTypes.string,
        family:PropTypes.string
    })
}

export default UserBox;