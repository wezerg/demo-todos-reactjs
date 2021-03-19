import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        let {todo} = this.props;
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Completed : {todo.completed ? "Terminée" : "En cours"}</h6>
                <p className="card-text">{todo.user}</p>
                <div className="row">
                    <div className="col-12">
                        <Link to={`/todos/${todo.id}`} className="btn btn-info">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    }
}