import React, {Component} from 'react';
import Todos from './Todos';
import AddTask from './AddTask';
import './App.css'

class App extends React.Component{
    state = {
        tasks: [
            {name: "Do Laundry", id: 1},
            {name: "Wash Dog", id:2},
            {name: "Clean House", id:3},
            {name: "Pay Bills", id:4},
            {name: "Go to Gym", id:5}
        ]
    }

    addTask = (task) => {
        var validName = true;
        this.state.tasks.map(pastTask => {
            if(task.name === pastTask.name){
                alert("There is already a task with this name")
                validName = false;
            } 
        })
        if(validName){
            task.id = Math.random();
            let tasks = [...this.state.tasks, task]
            this.setState({
                tasks: tasks
            })
        }     
    }

    deleteTask = (id) => {
        let tasks = this.state.tasks.filter(task => {
            return task.id !== id
        })
        this.setState({
            tasks: tasks
        })
    }

    render(){
        return(
            <div>
                <h1 id="title">Todo List</h1>
                <Todos tasks={this.state.tasks} deleteTask={this.deleteTask}/>
                <AddTask addTask={this.addTask}/>
            </div>
        )
    }
}

export default App;