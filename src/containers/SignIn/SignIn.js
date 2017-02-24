import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './main.less';

const style = {
    marginTop:12
}

const SignIn = () => (
    <form className='sign_in_form'>
      <MuiThemeProvider>
        <div>
            <TextField 
              floatingLabelText='Login'
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText='Password'
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText='Password repeat'
              fullWidth={true}
            /><br />
            <RaisedButton label="Sign In" primary={true} style={style} fullWidth={true} />
        </div>
      </MuiThemeProvider>
    </form>
);

export default SignIn;