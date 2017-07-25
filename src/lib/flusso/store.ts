import Observable = require('yaku/lib/Observable')
import * as _ from 'lodash'
import Promise from 'yaku'
import deepProxy from './deep-proxy'

type SubscriberFn = (store: Store, ...any) => void

abstract class Store {

    id = `${this.constructor.name}-${_.uniqueId()}`

    /**
     * The initial state
     */
    abstract store: {
        // make sure store is an object
        [key: string]: any,
    }

    constructor () {
        const self = this

        return new Proxy(this, {
            set (target, name, val) {
                if (name === 'store') {
                    self._defaultStore = _.cloneDeep(val)
                    target[name] = deepProxy(val, (type, target, path, val) => {
                        self.emit('change', type, target, path, val)
                    }, [])
                } else {
                    target[name] = val
                }
                return true
            },
        })
    }

    getDefaultStore (isClone = true) {
        return isClone ? _.cloneDeep(this._defaultStore) : this._defaultStore
    }

    subscribe (type: string, fn: SubscriberFn) {
        if (!this.subscribers)
            this.subscribers = []

        this.subscribers.push({ type, fn })
    }

    unsubscribe (type: string, fn: SubscriberFn) {
        if (!this.subscribers) return

        _.remove(this.subscribers, s =>
            s.type === type && s.fn === fn,
        )
    }

    emit (type: string, ...args) {
        if (!this.subscribers) return

        for (const s of this.subscribers) {
            if (s.type === type)
                s.fn(this, ...args)
        }
    }

    private _defaultStore

    private subscribers: Array<{ type: string, fn: SubscriberFn }>
}

export default Store
