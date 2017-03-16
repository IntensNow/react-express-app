import React from 'react';
import { connect } from 'react-redux';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { FormsyText } from 'formsy-material-ui/lib';


import validations from '../../utils/validations';
import { signIn } from '../../Actions';

const styles = {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    submitStyle: {
      marginTop: 32,
    }
}

const errorMessages = {
    loginError: 'Please choose another login',
    passwordError: 'The password is not valid',
    passwordReError: 'Passwords do not match'
}


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit:false
        }
        this.disableButton = this.disableButton.bind(this);
        this.enableButton  = this.enableButton. bind(this);
        this.submitForm    = this.submitForm.   bind(this);
    }
    
  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }
    
  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }
    
  submitForm(user) {
    const { dispatch } = this.props;
    dispatch(signIn(user));
  }
    
  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    let { paperStyle, submitStyle } = styles;
    let { passwordError, passwordReError, loginError } = errorMessages;
    let { strongPassword, passwordsMatch, goodLogin } = validations;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="userLogin"
              required
              floatingLabelText="Login"
              maxLength='20'
            />
            <FormsyText
              type="password"
              name="userPassword"
              validations={{strongPassword: strongPassword}}
              validationErrors={{strongPassword: passwordError}}
              required
              floatingLabelText="Password"
              
            />
            <FormsyText
              type="password"
              name="passwordRe"
              validations={{passwordsMatch: passwordsMatch}}
              validationErrors={{passwordsMatch: passwordReError}}
              floatingLabelText="Password repeat"
              
            />
            
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Sign In"
              disabled={!this.state.canSubmit}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    dispatch
})

export default connect(null, mapDispatchToProps)(SignIn);