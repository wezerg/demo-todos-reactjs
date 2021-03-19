import React, {Component} from 'react';
import TodoServices from '../services/todo.services';

export default class TodoUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: null,
            title: "",
            completed: false
        }
    }
    render(){
        let {completed, title} = this.state;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                <form onSubmit={(e) => this.updateTodo(e)}>
                        <label>Title</label>
                        <input type="text" id="title" className="form-control" value={title} onChange={(e) => this.handleChange(e)}/>
                        <label>Completed</label>
                        <select id="completed" className="form-control" value={completed} onChange={(e) => this.handleChange(e)}>
                            <option value="">--Please choose an option--</option>
                            <option value={false}>En cours</option>
                            <option value={true}>Terminée</option>
                        </select>
                        <button className="btn btn-success mb-3 mt-3">Update données</button>
                    </form>
                </div>
            </div>
        </div>
    }
    async componentDidMount(){
        let {id} = this.props.match.params;
        let response = await TodoServices.getTodo(id);
        this.setState({
            todo: response,
            title: response.title,
            completed: response.completed
        });
    }
    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }
    async updateTodo(e){
        e.preventDefault();
        let {id} = this.props.match.params;
        let {completed, title} = this.state;
        let data = {title, completed};
        await TodoServices.update(id, data);
    }
}