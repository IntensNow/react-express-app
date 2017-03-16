import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import { hideModal } from '../../Actions';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class AppModal extends React.Component {

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeModal}
      />
    ];

    return (
        <MuiThemeProvider>
          <div>
            <Dialog
              title="Notice"
              actions={actions}
              modal={true}
              open={this.props.active}
            >
              { this.props.text }
            </Dialog>
          </div>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
   active: state.modal.active, 
   text: state.modal.text 
});

const mapDispatchToProps = dispatch => ({
    closeModal() {
        dispatch(hideModal());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppModal)