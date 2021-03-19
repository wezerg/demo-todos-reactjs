import React, {Component} from 'react';
import TodoServices from '../services/todo.services';
import UserServices from '../services/user.services';

export default class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            userId: 0,
            title: "",
            users: []
        }
    }
    render(){
        let {users} = this.state;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Ajouter votre nouvelle tâche</h1>
                    <form onSubmit={(e) => this.sendNewTodo(e)}>
                        <label>Title</label>
                        <input type="text" id="title" className="form-control" onChange={(e) => this.handleChange(e)}/>
                        <label>Completed</label>
                        <select id="userId" className="form-control" onChange={(e) => this.handleChange(e)}>
                            <option value="">--Please choose an option--</option>
                            <option value={false}>En cours</option>
                            <option value={true}>Terminée</option>
                        </select>
                        <label>Owner</label>
                        <select id="userId" className="form-control" onChange={(e) => this.handleChange(e)}>
                            <option value="">--Please choose an option--</option>
                            {
                                users.length > 0 &&
                                users.map((user) =>{
                                    return <option key={user.id} value={user.id}>{user.name}-</option> 
                                })
                            }
                        </select>
                        <button className="btn btn-success mb-3 mt-3">Soumettre vos données</button>
                    </form>
                </div>
            </div>
        </div>
    }
    async componentDidMount(){
        let data = await UserServices.getList();
        this.setState({users: data});
    }
    handleChange(e){
        this.setState({[e.target.id]: e.target.value})
    }
    async sendNewTodo(e){
        e.preventDefault();
        let {userId, title, completed} = this.state;
        let data = {title,userId,completed};
        await TodoServices.create(data);
    }
}