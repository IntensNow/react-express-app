import React from 'react';
import './main.less';

import CreateChannelForm from '../../components/CreateChannelForm';
import validations from '../../utils/validations';
export default class CreateChannel extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        canSubmit: false,
        showPwInput:false,
        showForm:true
        }
    this.Toggle = this.Toggle.bind(this);
    }
    enableButton() {
        this.setState({
            canSubmit:true
        })
    }
    disableButton() {
        this.setState({
            canSubmit:false
        })
    }
    submit(e) {
        console.log(e);
    }
    Toggle(e) {
        const field = e.target.name;
        this.setState(prevState => {
            return {
                [field]: !prevState[field]
            }
        })
    }
    render() {
        //show input type='password' only if user want to
        return (
            <div className='cr_channel_box'>
                <button 
                    className='cr_channel_toggle'
                    onClick={this.Toggle}
                    name="showForm"> Add channel </button>
                { this.state.showForm && 
                    <CreateChannelForm 
                        Toggle={this.Toggle}
                        submit={this.submit}
                        disableButton={this.disableButton}
                        enableButton={this.enableButton}
                        canSubmit={this.state.canSubmit}
                        showPwInput={this.state.showPwInput}
                        strongPassword={validations.strongPassword}
                        isGoodTitle={validations.isGoodTitle}
                    />
               }
            </div>
        );
    }
}