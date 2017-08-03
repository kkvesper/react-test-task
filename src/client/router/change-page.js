export const goToHome = function(){
    setCurrentPage('home');
}

export const goToContactList = function(){
    setCurrentPage('contact-list');
}
export const goToEditContact = function(contactIndex){
    setCurrentPage('edit-contact');
    setCurrentlyViewedContact(contactIndex);
}

export const goToFavoriteList = function(){
    setCurrentPage('favorite-list');
}

export const goToAddNewContact = function(){
    setCurrentPage('add-new-contact');
}
