import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TodoList from './TodoList';

// class VisibleTodoList extends Component {

//     render() {
//         return <TodoList/>        
//     }

// }

// VisibleTodoList.contextTypes = {
//     store: PropTypes.object
// }

// pick the parts of the Redux state that you want
// to use as props in your connected component
const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoList);


//{this.props.todos.map(todo => <li>{todo.text}</li>)}