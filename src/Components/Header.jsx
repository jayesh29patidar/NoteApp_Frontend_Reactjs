import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark footer">
                        <img id="logo" src={require('../Images/icon.gif')} width="46px" alt="loading..." />
                        <div>
                            <a href="/" className="navbar-brand" style={{ marginRight: 20, paddingBottom: 10, marginLeft: 20 }}>
                                NotesApp
                            </a>
                        </div>

                        <div className="controls bar">

                            <Link to="/" >
                                <a >
                                    <button
                                        className="btn btn-secondary m-1"
                                    >
                                        Home
                                    </button></a>
                            </Link>
                            <Link to="/contact" >

                                <button
                                    className="btn btn-secondary m-1"
                                >
                                    Contact
                                </button>
                            </Link>


                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;