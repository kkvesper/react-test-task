import { getApp } from '../../app/app.jsx';

export const getState = function(){
    return getApp().state;
}

export const setState = function(fields){
    getApp().setState(fields);
}

export const setCurrentPage = function(page){
    setState({ currentPage: page });
}

export const getCurrentPage = function(){
    return getState()['currentPage'];
}

export const setContactList = function(contactList){
    setState({ contactList: contactList });
}

export const getContactList = function(){
    return getState()['contactList'];
}

export const setCurrentlyViewedContact = function(index){
    return setState({currentlyViewedContact: index});
}

export const getCurrentlyViewedContact = function(){
    return getState()['currentlyViewedContact'];
}



window.getState = getState;
window.setState = setState;

window.setCurrentPage = setCurrentPage;
window.getCurrentPage = getCurrentPage;

window.setContactList = setContactList;
window.getContactList = getContactList;

window.setCurrentlyViewedContact = setCurrentlyViewedContact;
window.getCurrentlyViewedContact = getCurrentlyViewedContact;