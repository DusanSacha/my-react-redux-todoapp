import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/';

const AddTodo = ({ dispatch }) => {
    let input;

    return ( <p>
        <input ref={node => input = node} />
        <button onClick={() => dispatch(addTodo(input.value))}>
            Add Todo
        </button>
    </p> )
}
export default connect()(AddTodo);