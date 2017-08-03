import './ContactForm.scss';
import React, { Component } from 'react';

export class ContactForm extends Component {
    onSubmit(){
        var newContact = {
            firstName: this.refs["firstName"].value,
            lastName: this.refs["lastName"].value,
            email: this.refs["email"].value,
            phone: this.refs["phone"].value
        };
        this.props.submitFunc(newContact);
    }

    render() {
        return (
            <div className="contact-form">
                <form>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name"
                        ref="firstName" defaultValue={ this.props.firstName } />

                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name"
                        ref="lastName" defaultValue={ this.props.lastName } />

                    <label>Email</label>
                    <input type="text" name="email" placeholder="abc@test.com"
                        ref="email" defaultValue={ this.props.email } />

                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="0123456789"
                        ref="phone" defaultValue={ this.props.phone } />

                </form>
                <button className="submit clickable-block" onClick={ () => this.onSubmit() }> Save </button>
            </div>
        );
    }
}


