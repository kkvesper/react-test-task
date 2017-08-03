import { setState, getState } from './manage-state.js';

export const setupState = function(){
    setCurrentPage('home');
    setContactList([
        {firstName: "Gael", lastName: "Flores", email: "flores.gael@gmail.com", phone: "0123456789", isFavorite: true},
        {firstName: "Alberto", lastName: "Ronaldo", email: "alberto@gmail.com", phone: "17176789", isFavorite: false},
        {firstName: "Toto", lastName: "Tata", email: "toto@gmail.com", phone: "0101010101", isFavorite: true}
    ]);
};