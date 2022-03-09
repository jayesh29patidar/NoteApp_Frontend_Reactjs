import React, { Component } from 'react';
import NService from '../Services/NService';

class EditNote extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            content: '',
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    componentDidMount() {
        NService.getNotesById(this.state.id).then((res) => {
            let note = res.data;
            // console.log(note.name,note.content);
            this.setState({
                name: note.name,
                content: note.content,
            })
        });
    }
    updateNote = (e) => {
        e.preventDefault();
        let note = {
            name: this.state.name,
            content: this.state.content,
           
        };
        console.log('note =>' + JSON.stringify(note));

        NService.updateNote(note, this.state.id).then(res => {
            this.props.history.push('/dashboard');
        });
    }

    cancel() {
        this.props.history.push("/dashboard");
    }

    changeNameHandler = (event) => {
        console.log("look:",event.target.value)
        this.setState({ name: event.target.value });
    }

    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Student</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Heading:</label>
                                    <input placeholder="Heading" name="heading" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Content: </label>
                                    <input placeholder="Content" name="content" className="form-control"
                                        value={this.state.content} onChange={this.changeContentHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.updateNote}>Update Note </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote;