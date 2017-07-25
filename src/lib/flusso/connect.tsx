import * as _ from 'lodash'
import * as React from 'react'
import browserHistory from '../browserHistory'
import Store from './store'

type Stores = [Store | { store: Store, path: string | string[] }]

export default function connect (stores: Stores, Component: React.ReactType) {
    const storeConfigs: Array<{
        store: Store,
        path: string[],
        fn?: any,
        lc?: any }> = []

    for (const s of stores) {
        if (s instanceof Store)
            storeConfigs.push({
                store: s,
                path: [],
            })
        else
            storeConfigs.push({
                store: s.store,
                path: _.toPath(s.path),
            })
    }

    return class extends React.Component<any, any> {
        subscribers: any[]

        constructor (props) {
            super(props)
        }

        componentWillMount () {
            for (const s of storeConfigs) {
                s.fn = (st, type, target, currPath: string[]) => {
                    if (_.startsWith(currPath as any, s.path as any))
                        this.setState({})
                }

                s.lc = browserHistory.listen((location) => {
                    s.store.emit('beforeLoad', s.store.store)
                })

                s.store.emit('beforeLoad', s.store.store)
                s.store.subscribe('change', s.fn)
            }
        }

        componentWillUnmount () {
            for (const s of storeConfigs) {
                s.lc()
                s.store.unsubscribe('change', s.fn)
            }
        }

        render () {
            return <Component {...this.props} />
        }
    }
}
