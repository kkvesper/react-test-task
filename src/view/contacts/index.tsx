import './index.less'
import * as React from 'react'
import { connect } from '../../lib/flusso'
import contacts from '../../store/contacts'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'
import ContactList from '../../component/contact-list'
import { Switch } from '@blueprintjs/core'

class Contacts extends React.Component<any, any> {
    render () {
        return <div className='contacts'>
            <div className='operations'>
                <Link
                    className="operation pt-button pt-intent-primary pt-icon-plus"
                    to='/edit'
                >
                    Add Contact
                </Link>

                <Switch checked={contacts.store.filterFavorites}
                    label="Favorites Only"
                    className='operation fav-only pt-large'
                    onChange={(e) => {
                        contacts.toggleFavoritesFilter()
                    }}
                />
            </div>

            <ContactList contacts={contacts.getList()} />
        </div>
    }
}

export default connect([contacts], Contacts)
