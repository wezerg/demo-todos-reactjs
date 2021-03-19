import { render } from '@testing-library/react';
import React, {Component} from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        let {user} = this.props;
        return <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Details of user n° {user.id}</h1>
                </div>
                <div className="col-12">
                    <p>Name : {user.name}</p>
                    <p>Username : {user.username}</p>
                    <p>Email : {user.email}</p>
                    <p>Phone : {user.phone}</p>
                    <p>Website : {user.website}</p>
                    <p>Number of todos completed : {user.countDone}</p>
                    <p>Number of todos uncompleted : {user.countNoDone}</p>
                </div>
            </div>
        </div>
    }
}