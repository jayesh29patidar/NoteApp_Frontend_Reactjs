import React, { Component } from 'react';
import NService from '../Services/NService';

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password }
        console.log('user =>' + JSON.stringify(user));
        console.log("im not in")
        console.log(user)

        NService.createUser(user).then(res => {
            console.log("im in");
            this.props.history.push('/login-user');
        });
    }

    cancel() {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add User<img src={require('../Images/login.gif')} width="86px" /></h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveUser}> Save </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;