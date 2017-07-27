import * as _ from 'lodash'
import uuid from 'uuid/v4';
import { Store } from '../lib/flusso'
import contacts, { IContact } from './contacts'

class Contacts extends Store {
    store = {
        contact: {
            id: '',
            name: '',
            phone: '',
            email: '',
            isFavorite: false,
        } as IContact
    }

    reset () {
        this.store.contact = this.getDefaultStore().contact
    }

    load (id: string) {
        this.store.contact.id = id

        const contact = _.cloneDeep(contacts.store.list[id])

        if (!contact) return

        this.store.contact = contact
    }

    setName (name: string) {
        this.store.contact.name = name
    }

    setPhone (phone: string) {
        this.store.contact.phone = phone
    }

    setEmail (email: string) {
        this.store.contact.email = email
    }
}

export default new Contacts()
