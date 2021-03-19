import React, {Component} from 'react';
import User from '../component/User';
import UserServices from '../services/user.services';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    render() {
        let {user} = this.state;
        return <div>
            {user !== null && <User user={user}/>}
        </div>
    }
    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await UserServices.getUser(id);
        this.setState({user: response});
    }
}