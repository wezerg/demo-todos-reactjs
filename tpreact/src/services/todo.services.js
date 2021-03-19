import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export default class TodoServices{

    static async getList(){
        let responseTodo = await axios.get(`${baseUrl}/todos`);
        let todos = responseTodo.data;
        let responseUser = await axios.get(`${baseUrl}/users`);
        let users = responseUser.data;
        for(let todo of todos){
            for(let user of users){
                if (user.id === todo.userId) {
                    todo.user = user.name
                }
            }
        }
        return todos;
    }
    static async create(data){
        let responseTodo = await axios.post(`${baseUrl}/todos`, data);
        console.log(responseTodo.status);
    }
    static async getTodo(id){
        let responseTodo = await axios.get(`${baseUrl}/todos/${id}`);
        let responseUser = await axios.get(`${baseUrl}/users/${responseTodo.data.userId}`);
        let todos = responseTodo.data;
        todos.user = responseUser.data;
        return todos;
    }
    static async remove(id){
        let response = await axios.delete(`${baseUrl}/todos/${id}`);
        console.log(response.status);
    }
    static async update(id, data){
        let response = await axios.put(`${baseUrl}/todos/${id}`, data);
        console.log(response.status);
    }
}