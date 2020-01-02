import React, {Component} from 'react';

const Todos = ({tasks, deleteTask}) => {

    
    const taskList = tasks.map(task => {

        return(
            <div className="todo" key={task.id}>
                <li onClick={() => {deleteTask(task.id)}}>{task.name}</li>
            </div>
        )
    });

        return(
            <div className="todos">
                {taskList}
            </div>
        )
}

export default Todos;