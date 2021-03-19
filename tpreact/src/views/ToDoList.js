import React, {Component} from 'react';
import Todo from '../component/Todo';
import TodoServices from '../services/todo.services';
import {Link} from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }
    render(){
        let {todos} = this.state;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>List of ToDo thing</h1>
                </div>
                <Link to="/todos/add" className="btn btn-success m-auto mb-3 mt-3 w-25">Ajouter une tâche</Link>
            </div>
            <div className="row">
                {
                    todos.length > 0 &&
                    todos.map((todo, index) => {
                        return <div key={index} className="col-md-12 col-lg-4">
                            <Todo todo={todo}/>
                        </div>
                    })
                }
            </div>
            
        </div>
    }
    async componentDidMount(){
        let data = await TodoServices.getList();
        this.setState({todos: data});
    }
}