import * as _ from 'lodash'

export enum ActionType {
    Set, Delete, Define,
}

type Path = string[]

type Modify = (type: ActionType, target, path: Path, val) => void

export default function deepProxy (obj, cb: Modify, path: Path) {
    if (_.isObjectLike(obj) && !_.isDate(obj))  {
        if (obj.__flussoProxy) return obj

        if (_.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                obj[i] = deepProxy(obj[i], cb, <Path> path.concat(i.toString()))
            }
        } else if (_.isSet(obj) || _.isMap(obj)) {
            throw new TypeError('object Set and Map is not allowed')
        } else if (_.isPlainObject(obj)) {
            // tslint:disable-next-line:forin
            for (const key in obj) {
                obj[key] = deepProxy(obj[key], cb, <Path> path.concat(key))
            }
        }

        Object.defineProperty(obj, '__flussoProxy', {
            configurable: false,
            enumerable: false,
            value: true,
        })

        return new Proxy(obj, {
            set (target, name: string, val) {
                const subPath = path.concat(name)
                target[name] = deepProxy(val, cb, subPath)
                cb(ActionType.Set, target, subPath, val)
                return true
            },

            deleteProperty (target, name: string) {
                const ret = delete target[name]
                cb(ActionType.Delete, target, path.concat(name), undefined)
                return ret
            },

            defineProperty (target, name: string, desc) {
                const subPath = path.concat(name)
                Object.defineProperty(target, name, _.assign({}, desc, {
                    value: deepProxy(desc.value, cb, subPath),
                }))
                cb(ActionType.Define, target, subPath, desc)
                return target
            },
        })
    } else {
        return obj
    }
}
