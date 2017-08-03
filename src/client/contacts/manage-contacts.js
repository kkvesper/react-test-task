export const addNewContact = function(contact){
    var contactList = getContactList();
    contactList.push(contact);
    setContactList(contactList);
}

export const editContact = function(index, contact){
    var contactList = getContactList();
    contactList[index] = contact;
    setContactList(contactList);
}
export const getContactFromIndex = function(index){
    var contactList = getContactList();
    return contactList[index];
}

export const removeContact = function(index){
    var contactList = getContactList();
    contactList.splice(index, 1)
    setContactList(contactList);
}