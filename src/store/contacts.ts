import * as _ from 'lodash'
import * as uuid from 'uuid/v4';
import { Store, persist, PersistType } from '../lib/flusso'
import browserHistory from '../lib/browserHistory'
import edit from './edit'

export interface IContact {
    id: string
    name: string
    phone: string
    email: string
    isFavorite: boolean
}

export interface IContacts {
    [id: string]: IContact
}

class Contacts extends Store {
    @persist('list', PersistType.LocalStorage)
    store = {
        filterFavorites: false,
        list: {} as IContacts
    }

    constructor () {
        super()

        this.add = this.add.bind(this)
    }

    add () {
        const id = uuid()

        this.store.list[id] = _.extend({}, edit.store.contact, {
            id,
            isFavorite: false,
        })

        browserHistory.push('/')
    }

    update (id: string, contact: IContact) {
        this.store.list[id] = contact
        browserHistory.push('/')
    }

    del (id: string) {
        delete this.store.list[id]
    }

    toggleFavorite (id: string) {
        this.store.list[id].isFavorite = !this.store.list[id].isFavorite
    }

    toggleFavoritesFilter () {
        this.store.filterFavorites = !this.store.filterFavorites
    }

    getList () {
        if (this.store.filterFavorites) {
            return _.reduce(this.store.list, (ret, contact, id) => {
                if (contact.isFavorite)
                    ret[id] = contact
                return ret
            }, {})
        } else {
            return this.store.list
        }
    }
}

export default new Contacts()
