import React, { Component } from 'react';
import NService from '../Services/NService';

class AddNote extends Component {

    constructor(props) {
        super(props)
        console.log("Add notes props: ",this.props);
        this.state = {
            user : {},
            name: '',
            content: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.saveNote = this.saveNote.bind(this);
    }

    componentDidMount() {
       this.setState({user: this.props.history.location.state})
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeContentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    saveNote = (e) => {
        e.preventDefault();
        let note = { name: this.state.name, content: this.state.content, user: this.state.user}
        console.log('note =>' + JSON.stringify(note));
        console.log("im not in")
        console.log(note)

        NService.createNote(note).then(res =>{
            console.log("im in");
            this.props.history.push('/dashboard',{message : [this.state.user]});
        });
    }

    cancel(){
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Note</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Heading:</label>
                                    <input placeholder="Heading" name="heading" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Content:</label>
                                    <input placeholder="Content" name="content" className="form-control"
                                        value={this.state.content} onChange={this.changeContentHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveNote}> Add </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNote;