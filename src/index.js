import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './components/TodoApp';
import { createStore }  from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
//import PropTypes from 'prop-types';

const store = createStore(reducer);

// class Provider extends Component {
//   getChildContext() {
//     return {
//       store: this.props.store
//     }
//   }

//   render(){
//     return this.props.children;
//   }
// };

// Provider.childContextTypes = {
//   store: PropTypes.object
// }


ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
