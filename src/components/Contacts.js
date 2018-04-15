import React from 'react';


export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addContact = this.addContact.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    addContact(contacts) {
        if (contacts.length > 0) {
            this.props.addContact(contacts);
            this.setState({value: ''});
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary" onClick={() => this.addContact(this.state.value)}>Submit</button>
            </div>
        );
    }
}