import React, { Component } from 'react';
// import NService from '../Services/NService';
// import icon from '../Images/icon';

class IndexPage extends Component {


    registerUser = (e) => {
        e.preventDefault();
        this.props.history.push('/add-user');
    }
    loginUser = (e) => {
        e.preventDefault();
        this.props.history.push('/login-user');
    }


    render() {
        return (
            // <div>
            //     <h1> Welcome to index page</h1>
            //     <button className="btn btn-dark " onClick={this.registerUser} >Register</button>
            //     <button className="btn btn-dark " onClick={this.loginUser} >Login </button>
            // </div>

            // ~~~~~~~~~

            <div className="background-main">

                {/* <img src="https://img.icons8.com/color/48/000000/task--v2.png"/> */}              
                {/* <img src={require('../Images/icon.gif')} alt="loading..." /> */}

                <div className='main-view' >
                    <h1>
                        Welcome to NotesApp <img id="register_logo" src={require('../Images/register.gif')} width="50px" />
                    </h1>
                    <div className="login-signup">
                        <button className="btn btn-dark " onClick={this.registerUser} >Register</button>
                        &#9135;&#9135;&#9135;&#9135; or  &#9135;&#9135;&#9135;&#9135;
                        <button className="btn btn-dark " onClick={this.loginUser} >Login </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;