import { setState, getState } from './manage-state.js';

export const setupState = function(){
    setState({});
    setCurrentPage('home');
    setContactList([
        {firstName: "Gael", lastName: "Flores", email: "flores.gael@gmail.com", phone: "0123456789"},
        {firstName: "Alberto", lastName: "Ronaldo", email: "alberto@gmail.com", phone: "17176789"},
        {firstName: "Toto", lastName: "Tata", email: "toto@gmail.com", phone: "0101010101"}
    ]);
};