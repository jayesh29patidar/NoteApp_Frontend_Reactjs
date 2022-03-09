import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Unauto extends Component {
    render() {
        return (
            <div className="errorbg">
                <h1>401 Unauthorized</h1>
                <h6>WWW-Authenticate: Basic realm="Access to staging site"</h6>
                <Link to="/" >
                    <a >
                        <button
                            className="btn btn-secondary m-1"
                        >
                            Home
                        </button></a>
                </Link>
            </div>
        );
    }
}

export default Unauto;