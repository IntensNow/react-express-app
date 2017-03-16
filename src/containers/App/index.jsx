import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import cookie from 'react-cookie';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { checkAuth } from '../../Actions';

import './main.less';

import DevTools from '../DevTools';
import AppModal from '../AppModal';

class App extends Component {
  static onEnter() {
      console.log('App.onEnter');
      console.log('this v onEnter = ' + typeof this);
      console.log('props v onEnter = ' + typeof this.props);
  }
  render() {
    return (
      <Grid componentClass='div' fluid={true}>
        { NODE_ENV !== 'production' && <DevTools /> }
        <Row componentClass='div'>
          <Col xs={12} componentClass='section'>
            { this.props.children }
          </Col>
        </Row>
        <AppModal />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
    username:state.user.name
});

const mapDispatchToProps = dispatch => ({
    checkAuth() {
        dispatch(checkAuth());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);