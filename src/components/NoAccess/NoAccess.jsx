import React from 'react';
import { browserHistory, Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

export default () => {
    return (
        <MuiThemeProvider>
            <div className='no_access'> 
                <p>You need to login before you can see this page</p>
                <Link to='/signup'><FlatButton label='Sign up' primary={true}/></Link>
                <Link to='/signin'><FlatButton label='Sign in' primary={true}/></Link>
            </div>
        </MuiThemeProvider>
    
    )
}
