import React                    from 'react';
import { browserHistory, Link } from 'react-router';
import { connect }              from 'react-redux';
import FlatButton               from 'material-ui/FlatButton';

import NoAccess from '../../components/NoAccess';

export default (Component) => {

    class CheckAccess extends React.Component {
        
        render() {
            
            const content = this.props.user.isAuthenticated ? 
                  
                  <Component {...this.props} /> : <NoAccess />; 
            
            return (
                <div>
                    { content }
                </div>
            
            )
        }    
    }
    
    const MapStateToProps = state => ({
        
        user:state.user
        
    });
    
    return connect(MapStateToProps)(CheckAccess);
    
}