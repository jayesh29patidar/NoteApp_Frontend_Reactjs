import React, { Component } from 'react';
import NService from '../Services/NService';

class LoginUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userToken: '',
            emailId: '',
            password:'',
            
            
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        
        this.loginStudent = this.loginStudent.bind(this);
    }

    // componentDidMount() {
        
    // }


    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    loginStudent = (e) => {
        // console.log("jayesh");
        e.preventDefault();
        let user = { emailId: this.state.emailId , password: this.state.password};
        console.log('user =>' + JSON.stringify(user));
        console.log("im out");

        NService.loginUser(user).then(res =>{
            console.log("im in");
            console.log(res.data);
            this.setState({userToken: res.data.userToken})

            if(res.data.message.length === 0){
                console.log("wrong ")
                return
            }
            else{
                console.log("right")
            }

            // console.log(res.data.message);
            this.props.history.push('/dashboard', res.data);
        });
    }

    cancel(){
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">User Login</h3>
                        <div className="card-body">
                            <form>                           
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePassword} />
                                </div>

                                <button className="btn btn-success" onClick={this.loginStudent}>Login </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUser;