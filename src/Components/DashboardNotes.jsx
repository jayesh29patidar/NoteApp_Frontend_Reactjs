import React, { Component } from 'react';
import NService from '../Services/NService';

class DashboardNotes extends Component {

    constructor(props) {
        super(props)
        console.log(this.props);
        this.state = {
            userToken: "",

            notes: [],
            user: {},
        };
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);

    }
    componentDidMount() {

        if (typeof this.props.history.location.state === "undefined") {
            console.log("without token")
            this.props.history.push("/no-token")
            return
        }
        else {
            console.log("with token")
        }
        // NService.getNotes().then((res) => {
        //     console.log(res.data);
        //     this.setState({ notes: res.data.message });
        // });
        console.log(this.props);
        this.setState({ user: this.props.history.location.state.message[0] })
        NService.getNotesByUser(this.props.history.location.state.message[0]).then(
            (res) => {
                this.setState({ notes: res.data.notesData });
            }
        );
    }

    addNote = (e) => {
        e.preventDefault();
        this.props.history.push('/add-note', this.state.user);

    }

    editNote(id) {

        this.props.history.push(`/edit-note/${id}`);
    }

    deleteNote(id) {
        console.log("im in")
        NService.deleteNote(id).then(res => {
            this.setState({ notes: this.state.notes.filter(note => note.id !== id) });
        });

    }

    render() {
        return (
            <div className="background-dash">
                <h1>{this.state.user.firstName} {this.state.user.lastName} Notes</h1>

                <div className="row">
                    {console.log("user:=>", this.state.user)}
                    <button className="btn btn-success" onClick={this.addNote}>Add Note <img className="login-icon2" src={require('../Images/addbutton2.gif')} width="36px" /></button>

                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">
                        <thead>
                            <tr>
                                <th>Heading</th>
                                <th> Content</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.notes.map(
                                    note =>
                                        <tr key={note.id}>
                                            <td> {note.name} </td>
                                            <td> {note.content}</td>
                                            <td>

                                                <button className="btn btn-secondary btn-outline-warning m-1" onClick={() => this.editNote(note.id)}>
                                                    Update Note <img className="delete-icon" src={require('../Images/update.gif')} width="28px" />
                                                </button>
                                                <button className="btn btn-secondary btn-outline-danger m-1" onClick={() => this.deleteNote(note.id)}>
                                                    Delete Note <img className="delete-icon" src={require('../Images/delete.gif')} width="28px" />
                                                </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DashboardNotes;