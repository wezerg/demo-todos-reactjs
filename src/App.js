import React, {Component} from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import TodoDetails from './views/TodoDetails';
import ToDoList from './views/ToDoList';
import TodoAdd from './views/TodosAdd';
import TodoUpdate from './views/TodoUpdate';
import UserDetails from './views/UserDetails';
import Userlist from './views/UserList';

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ToDoList}/>
                <Route exact path="/users" component={Userlist}/>
                <Route exact path="/todos/add" component={TodoAdd}/>
                <Route exact path="/todos/:id" component={TodoDetails}/>
                <Route exact path="/users/:id" component={UserDetails}/>
                <Route exact path="/todos/:id/edit" component={TodoUpdate}/>
                
            </Switch>
            <Footer />
        </BrowserRouter>
    }
}