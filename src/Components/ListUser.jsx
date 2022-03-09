import React, { Component } from 'react';
import NService from '../Services/NService';

class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            
        }
    }
    componentDidMount() {
        NService.getUsers().then((res) => {

            // console.log({user: res.data});
            console.log(res.data);
            this.setState({ users: res.data.message });
        });
    }

    addUser = (e) => {
        e.preventDefault();
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User List</h2>
                <div className="row">
                <button className="btn btn-primary" onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">
                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email Id</th>
                                <th> Password</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.firstName}</td>
                                            <td> {user.lastName}</td>
                                            <td> {user.password}</td>
                                            <td> {user.emailId}</td>
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

export default ListUser;
