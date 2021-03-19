import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Todo List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/todos/add" className="nav-link">Add ToDo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">User list</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}