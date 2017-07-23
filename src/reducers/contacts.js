import { Map, List } from 'immutable'

const initState = Map({
    contacts: List([]),
})

export default (state = initState, action) => {
    switch (action.type) {
    case 'ADD_CONTACT':
        return state.get('contacts').push(action.value)
    default:
        return state
    }
}