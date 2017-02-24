import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import validations from '../../utils/validations';
import { FormsyText } from 'formsy-material-ui/lib';

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
    emailError: 'This is not a valid email',
    loginError: 'Please choose another login',
    passwordError: 'Please provide a strong password',
    passwordReError: 'Passwords do not match',
    uniqueError: 'This username is already taken'
}


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canSubmit:false,
            isUniqueLogin: false,
            fieldsWriteable: true
        }
        this.checkLogin    = this.checkLogin.   bind(this);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton  = this.enableButton. bind(this);
        this.isUniqueLogin = this.isUniqueLogin.bind(this);
        this.submitForm    = this.submitForm.   bind(this);
    }
    
  componentDidMount() {
      const socket = this.props.socket;
      
      socket.on('user exist info', data => {
          this.setState({
              isUniqueLogin: data.isUniqueLogin
          });
      });
      
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
  
  isUniqueLogin(values, value) {
      if (value !== 'undefined' && !this.state.isUniqueLogin) {
          return false;
      }
      return true;
  }
    
  checkLogin(e) {
      const socket = this.props.socket;
      const data = {
          login: e.target.value
      }
      socket.emit('is user exist', data);
  }
    
  submitForm(data) {
    this.disableFields();
    const socket = this.props.socket;
    socket.emit('sign up', data);
  }

  disableFields() {
      this.setState({
          fieldsWriteable:false
      })
  }
    
  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    let { paperStyle, submitStyle } = styles;
    let { emailError, passwordError, passwordReError, uniqueError, loginError } = errorMessages;
    let { isUniqueLogin, strongPassword, passwordsMatch, goodLogin } = validations;

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
              validations={{isUniqueLogin:this.isUniqueLogin, goodLogin: goodLogin}}
              validationErrors={{isUniqueLogin:uniqueError, goodLogin: loginError}}
              required
              floatingLabelText="Login"
              maxLength='20'
              onChange={this.checkLogin}
              disabled={!this.state.fieldsWriteable}
            />
            <FormsyText
              type="password"
              name="userPassword"
              validations={{strongPassword: strongPassword}}
              validationErrors={{strongPassword: passwordError}}
              required
              floatingLabelText="Password"
              disabled={!this.state.fieldsWriteable}
              
            />
            <FormsyText
              type="password"
              name="passwordRe"
              validations={{passwordsMatch: passwordsMatch}}
              validationErrors={{passwordsMatch: passwordReError}}
              floatingLabelText="Password repeat"
              disabled={!this.state.fieldsWriteable}
              
            />
            <FormsyText
              name="userEmail"
              validations="isEmail"
              validationError={emailError}
              required
              floatingLabelText="Email"
              updateImmediately
              disabled={!this.state.fieldsWriteable}
              
            />
            <RaisedButton
              style={submitStyle}
              type="submit"
              label="Sign Up"
              disabled={!this.state.canSubmit || !this.state.fieldsWriteable}
            />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default SignUp;