import React from 'react';
import { connect } from 'react-redux';

import './app.less';
import { Column, Row, Title } from '../components';

import Editor from './editor';
import Contacts from './contacts';

const App = ({ dispatch }) => (<Column className="app">
  <Row><Title>Contact Book</Title></Row>

  <Editor />
  <Contacts />
</Column>);

export default connect()(App);
