import * as _ from 'lodash'
import browserHistory from '../../lib/browserHistory'
import Store from './store'

export enum PersistType {
    Query, LocalStorage,
}

export default (path: string[] | string, type = PersistType.Query) => {
    return (
        store: Store,
        key: string | symbol,
    ) => {
        if (key !== 'store')
            throw new TypeError('this decorator is only allow on "this store"')

        const savePath = _.toPath(path)

        store.subscribe('beforeLoad', (s, data) => {
            loadStoreFromPersisted(s, data, savePath, type)
        })

        store.subscribe('change', (s, t, target, currPath: string[], val) => {
            save(s, savePath, currPath, type)
        })
    }
}

function save (store: Store, savePath: string[], currPath: string[], type: PersistType) {
    if (_.startsWith(<any> currPath, <any> savePath)) {
        persist(
            store,
            savePath,
            _.get(store.store, savePath),
            type,
        )
    }
}

function loadStoreFromPersisted (store: Store, data: any, path: string[], type: PersistType) {
    const val = getPersisted(store, path, type)

    if (val === undefined)
        _.set(data, path, _.get(store.getDefaultStore(false), path))
    else
        _.set(data, path, val)
}

function persist (store: Store, path: string[], value, type: PersistType) {
    const key = `${store.id}.${path.join('.')}`

    switch (type) {
    case PersistType.Query:
        const location = browserHistory.getCurrentLocation()
        location.query[key] = JSON.stringify(value)
        history.replaceState(null, null, browserHistory.createPath(location))
        break

    case PersistType.LocalStorage:
        localStorage.setItem(key, JSON.stringify(value))
        break

    default:
        throw TypeError('wrong persist type')
    }
}

function getPersisted (store: Store, path: string[], type: PersistType) {
    const key = `${store.id}.${path.join('.')}`
    let val

    switch (type) {
    case PersistType.Query:
        const location = browserHistory.getCurrentLocation()
        val = location.query[key]

        if (val === undefined) return

        try {
            return JSON.parse(val)
        } catch (err) {
            return
        }

    case PersistType.LocalStorage:
        val = localStorage[key]

        if (val === undefined) return

        try {
            return JSON.parse(val)
        } catch (err) {
            return
        }

    default:
        throw TypeError('wrong persist type')
    }
}
