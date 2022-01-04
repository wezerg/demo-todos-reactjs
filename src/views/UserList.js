import React, {Component} from 'react';
import UserServices from '../services/user.services';

export default class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    render(){
        let {users} = this.state;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Listes des utilisateurs</h1>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Todo uncompleted</th>
                        <th>Todo completed</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td>
                                    <p>{user.name}</p>
                                </td>
                                <td>
                                    <p>{user.username}</p>
                                </td>
                                <td>
                                    <p>{user.phone}</p>
                                </td>
                                <td>
                                    <p>{user.email}</p>
                                </td>
                                <td>
                                    <p>{user.website}</p>
                                </td>
                                <td>
                                    <p>{user.countNoDone}</p>
                                </td>
                                <td>
                                    <p>{user.countDone}</p>
                                </td>
                            </tr>
                        })
                    }
                    
                </tbody>
            </table>    
        </div>
    }
    async componentDidMount(){
        let response = await UserServices.getList();
        this.setState({users: response});
    }
}