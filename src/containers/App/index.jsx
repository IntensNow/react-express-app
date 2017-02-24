import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './main.less';
//first using Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DevTools from '../DevTools';
export default class App extends Component {

    
  render() {
    return (
      <Grid componentClass='div' fluid={true}>
        { NODE_ENV === 'development' && <DevTools /> }
        <MuiThemeProvider> 
            <RaisedButton label='default'/> 
        </MuiThemeProvider>
        <Row componentClass='div'>
          <Col xs={12} componentClass='section'>
            { this.props.children }
          </Col>
        </Row>
      </Grid>
    )
  }
}