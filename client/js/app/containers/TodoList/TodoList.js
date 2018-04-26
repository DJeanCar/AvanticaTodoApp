import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from '../Todo/Todo';
import styles from './todolist.scss';
import {
  getTodos,
} from '../../actions';

@connect(
  state => ({
    todos: state.todo.todos,
  }),
  dispatch => bindActionCreators({
    getTodos,
  }, dispatch)
)


export default class TodoList extends Component {

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        { todos.map(todo => <Todo key={ todo._id }
                              todo={ todo } />
        )}
      </div>
    );
  }
}
