import React, { Component } from 'react';
import Header from './components/header';
import Contacts from './components/Contacts';
import AddContact from './components/addContact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {id: 0, text: "Wesley"},
                {id: 1, text: "David"},
                {id: 2, text: "Tyler"}
            ],
            nextId: 3
        };

        this.addContact = this.addContact.bind(this);
        this.removeContacts = this.removeContacts.bind(this);
    }

    addContact(Text) {
        let contacts = this.state.contacts.slice();
        contacts.push({id: this.state.nextId, text: Text});
        this.setState({
            contacts: contacts,
            nextId: ++this.state.nextId
        });
    }

    removeContacts(id) {
        this.setState({
            contacts: this.state.contacts.filter((contact,) => contact.id !== id)
        });
    }

    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Contacts Text="" addContact={this.addContact} />
                    <ul>
                        {
                            this.state.contacts.map((contact) => {
                                return <AddContact contacts={contact} key={contact.id} id={contact.id} removeContacts={this.removeContacts}/>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;