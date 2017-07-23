import React from 'react';

import './app.less';
import { Column, Row, Title, Button } from '../components';
import { connect } from 'react-redux'
import { addContact } from '../actions'


const App = ({ dispatch }) => {
  const onAddClick = (event) => {
    dispatch(addContact('ok'))
  };

  return <Column className="app">
    <Row><Title>Contact Book</Title></Row>
    <Row><Button label="Add Contact" onClick={onAddClick} /></Row>
  </Column>
}

export default connect()(App);
