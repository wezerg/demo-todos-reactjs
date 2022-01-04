import React, {Component} from 'react';
import TodoServices from '../services/todo.services';
import {Link} from 'react-router-dom';

export default class TodoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: null
        }
    }
    render(){
        let {todo} = this.state;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>{todo !== null ? todo.title : "Chargement..."}</h1>
                    <p>{todo === null ? "Chargement..." : todo.completed === false ? "En cours" : "Terminée"}</p>
                    {todo !== null && <Link to={`/users/${todo.user.id}`}>{todo.user.name}</Link>}

                </div>
                {todo !== null &&<div>
                    <Link to={`/todos/${todo.id}/edit`} className="btn btn-info">Modifier</Link>
                    <button className="btn btn-danger" onClick={() => this.removeTodo()}>Supprimer</button>
                </div>}
            </div>
        </div>
    }
    async componentDidMount(){
        let {id} = this.props.match.params;
        let data = await TodoServices.getTodo(id);
        this.setState({todo: data});
    }

    async removeTodo(){
        let {id} = this.props.match.params;
        TodoServices.remove(id);
        this.props.history.push('/');
    }
}