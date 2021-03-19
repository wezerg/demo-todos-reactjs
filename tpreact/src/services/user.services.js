import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export default class UserServices{

    static async getList(){
        let responseUsers = await axios.get(`${baseUrl}/users`);
        let responseTodos = await axios.get(`${baseUrl}/todos`)
        let users = responseUsers.data;
        let todos = responseTodos.data;
        for(let user of users){
            user.todos = [];
            user.countNoDone = 0;
            user.countDone = 0;
            for(let todo of todos){
                if (todo.userId === user.id) {
                    user.todos.push(todo);
                    if (todo.completed) {
                        user.countDone++;
                    }
                    else{
                        user.countNoDone++;
                    }
                    
                }
            }
        }
        return users;
    }
    static async getUser(id){
        let responseUser = await axios.get(`${baseUrl}/users/${id}`);
        let responseTodo = await axios.get(`${baseUrl}/todos`);
        let user = responseUser.data;
        let todos = responseTodo.data;
        user.todos = [];
        user.countNoDone = 0;
        user.countDone = 0;
        for(let todo of todos){
            if (todo.userId === user.id) {
                user.todos.push(todo);
                if (todo.completed) {
                    user.countDone++;
                }
                else{
                    user.countNoDone++;
                }
                
            }
        }
        return user;
    }
}