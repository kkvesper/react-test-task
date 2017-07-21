import React from 'react';

import './app.scss';
import { Column, Row, Title, ContactEdit, Modal, Button } from '../components';
import { Contacts, Favourites } from '../containers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalVisible: false
    };
  }

  onClick = () => {
    this.setState({ editModalVisible: true });
  }

  render = () => (
    <Column className="app">
      <Row><Title>Contact Book</Title></Row>
      <Row><Button label="Add Contact" onClick={this.onClick} /></Row>
      <Contacts />
      <div className="blank" />
      <Favourites />
      <Modal
        className="contact-edit-modal"
        onClickOverlay={() => { this.setState({ editModalVisible: false }); }}
        visible={this.state.editModalVisible}
      >
        <ContactEdit
          close={() => { this.setState({ editModalVisible: false }); }}
          contact={{ id: -1, name: '', phone: '', email: '' }}
        />
      </Modal>
    </Column>
  )
}

export default App;
