import React, {Component} from 'react';

class AddTask extends React.Component {
    state = {
        name: null,
        id: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
    }

    render(){
        return(
            <div className="add-task">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="name" placeholder="Create a Task" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTask;