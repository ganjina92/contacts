import React from 'react';


export default class AddContact extends React.Component {
    constructor(props) {
        super(props);
    }

    removeContacts(id) {
        this.props.removeContacts(id);
    }

    render() {
        return (
            <div className="Wrapper">
                <button className="removeContacts" onClick={(e)=> this.removeContacts(this.props.id) }>Remove</button>{this.props.contacts.text}
            </div>
        );
    }
}