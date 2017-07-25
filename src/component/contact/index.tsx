import './index.less'
import * as React from 'react'
import * as classnames from 'classnames'
import { Row, Col } from 'react-flexbox-grid'
import contacts, { IContact } from '../../store/contacts'
import { Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'
import contact from '../../store/contacts'
interface IProps {
    contact: IContact
}

class Contact extends React.Component<IProps, any> {
    render () {
        const contact = this.props.contact

        return <Row className='contact'>
            <Col lg md sm xs>
                {contact.name}
            </Col>
            <Col lg md sm xs>
                {contact.phone}
            </Col>
            <Col lg md sm xs>
                {contact.email}
            </Col>
            <Col lg md sm xs>
                <Link className='operation pt-button pt-icon-edit'
                    to={`/edit?id=${contact.id}`}
                >
                </Link>

                <Button className={classnames('operation pt-button', {
                    'pt-icon-star': contact.isFavorite,
                    'pt-icon-star-empty': !contact.isFavorite,
                })}
                    onClick={() => contacts.toggleFavorite(contact.id)}
                >
                </Button>

                <Button className='operation pt-icon-trash pt-intent-danger'
                    onClick={() => contacts.del(contact.id)}
                >
                </Button>
            </Col>
        </Row>
    }
}

export default Contact
