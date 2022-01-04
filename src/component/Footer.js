import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <footer className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <Link to="/" className="nav-link w-25">Home</Link>
                        
                    </div>
                    <div className="col-3">
                        <Link to="/" className="nav-link">Reseaux sociaux</Link>
                    </div>
                </div>
            </div>
        </footer>
    }
}