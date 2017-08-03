import './NavBar.scss';

import React, { Component } from 'react';

import { goToContactList, goToAddNewContact, goToFavoriteList } from '../../client/router/change-page.js';

export class NavBar extends Component {

    render() {
        return (
            <div className="nav-bar">
                <div className="description">
                    Navigation
                </div>
                <div className="nav-list">

                    <div className="nav-item clickable-block" onClick={ () => goToContactList() } >
                        <div className="icon-part">
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </div>
                        <div className="text-part">
                            Contacts
                        </div>
                    </div>


                    <div className="nav-item clickable-block" onClick={ () => goToAddNewContact() } >
                        <div className="icon-part">
                            <i className="fa fa-plus-square" aria-hidden="true"></i>
                        </div>
                        <div className="text-part">
                            New Contact
                        </div>
                    </div>


                    <div className="nav-item clickable-block" onClick={ () => goToFavoriteList() } >
                        <div className="icon-part">
                            <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="text-part">
                            Favorites
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

