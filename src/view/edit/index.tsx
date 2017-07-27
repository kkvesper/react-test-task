import './index.less'
import * as React from 'react'
import { connect } from '../../lib/flusso'
import edit from '../../store/edit'
import contacts from '../../store/contacts'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from '@blueprintjs/core'
import * as querystring from 'querystring'

class Edit extends React.Component<any, any> {
    componentDidMount () {
        const qs = querystring.parse(location.search.slice(1), true) as {
            id: string
        }

        if (qs.id) {
            edit.load(qs.id)
        } else {
            edit.reset()
        }
    }

    onSubmit (e) {
        e.preventDefault()

        if (edit.store.contact.id) {
            contacts.update(edit.store.contact.id, edit.store.contact)
        } else {
            contacts.add()
        }
    }

    render () {
        return <form className='edit pt-card' onSubmit={this.onSubmit}>
            <Grid>
                <Row>
                    <Col lg md sm xs>
                        <label className="pt-label">
                            Name
                            <input type="text" className="pt-input"
                                value={edit.store.contact.name}
                                onChange={(e) => {
                                    edit.setName(e.target.value)
                                }}
                            />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col lg md sm xs>
                        <label className="pt-label">
                            Phone
                            <input type="text" className="pt-input"
                                value={edit.store.contact.phone}
                                onChange={(e) => {
                                    edit.setPhone(e.target.value)
                                }}
                            />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col lg md sm xs>
                        <label className="pt-label">
                            Email
                            <input type="text" className="pt-input"
                                value={edit.store.contact.email}
                                onChange={(e) => {
                                    edit.setEmail(e.target.value)
                                }}
                            />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col lg md sm xs>
                        <input type='submit'
                            className='pt-button pt-intent-primary'
                            value={edit.store.contact.id ? 'Update' : 'Add'}
                        />
                    </Col>
                </Row>
            </Grid>
        </form>
    }
}

export default connect([edit, contacts], Edit)
