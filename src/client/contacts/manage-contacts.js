export const addNewContact = function(contact){
    var contactList = getState()['contactList'];
    contactList.push(contact);
    setContactList(contactList);
}

export const editContact = function(index, contact){
    var contactList = getState()['contactList'];
    contactList[index] = contact;
    setContactList(contactList);
}
export const getContactFromIndex = function(index){
    var contactList = getState()['contactList'];
    return contactList[index];
}

export const removeContact = function(index){
    var contactList = getState()['contactList'];
    contactList.splice(index, 1)
    setContactList(contactList);
}

export const toggleContactFavorite = function(index){
    var contactList = getState()['contactList'];
    var contact = contactList[index];

    contact.isFavorite = !contact.isFavorite;
    contactList[index] = contact;
    setContactList(contactList);
}
