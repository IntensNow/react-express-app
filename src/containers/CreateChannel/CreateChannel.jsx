import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './main.less';

import CreateChannelForm from '../../components/CreateChannelForm';

class CreateChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit: false,
            showForm:true,
            titleValue: ''
            }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.Toggle = this.Toggle.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        const createChannel = this.props.createChannel;
        createChannel(this.state.titleValue.trim());
        e.preventDefault();
    }
    Toggle(e) {
        const field = e.target.name;
        this.setState(prevState => {
            return {
                [field]: !prevState[field]
            }
        })
    }
    
    onTitleChange(e){
        const titleValue = e.target.value;
        let canSubmit;
          if(titleValue.match(new RegExp('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'))){
              canSubmit = true;
          } else {
              canSubmit = false;
          }
        this.setState({
            canSubmit,
            titleValue
        })
        
    }
    
    render() {
        
        return (
            <div className='cr_channel_box'>
                <button 
                    className='cr_channel_toggle'
                    onClick={this.Toggle}
                    name="showForm"> Add channel </button>
                { this.state.showForm && 
                    <CreateChannelForm 
                        submit={this.submit}
                        canSubmit={this.state.canSubmit}
                        onTitleChange={this.onTitleChange}
                        titleValue={this.state.titleValue}
                    />
               }
            </div>
        );
    }
}

CreateChannel.propTypes = {
    createChannel:PropTypes.func
}

export default CreateChannel;
