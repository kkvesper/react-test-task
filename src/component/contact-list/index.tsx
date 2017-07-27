import './index.less'
import * as React from 'react'
import * as _ from 'lodash'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { IContacts } from '../../store/contacts'
import Contact from '../contact'

interface IProps {
    contacts: IContacts
}

class ContactList extends React.Component<IProps, any> {
    render () {
        return <Grid>
            <Row className='contact-list-header'>
                <Col lg md sm xs>
                    Name
                </Col>
                <Col lg md sm xs>
                    Phone
                </Col>
                <Col lg md sm xs>
                    Email
                </Col>
                <Col lg md sm xs>
                    Operations
                </Col>
            </Row>

            {_.map<any, any>(this.props.contacts, (contact, id) => {
                return <Contact key={id} contact={contact} />
            })}
        </Grid>
    }
}

export default ContactList
