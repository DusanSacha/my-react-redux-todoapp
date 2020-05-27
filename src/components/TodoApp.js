import React, { Component } from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { connect } from 'react-redux'

class TodoApp extends Component {
    render(){
        return <div>
        <AddTodo />
        <VisibleTodoList />
    </div>

    }
}

export default TodoApp;