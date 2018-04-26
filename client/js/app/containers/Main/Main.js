import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './main.scss';
import TodoList from '../TodoList/TodoList';
import Search from '../Search/Search';
import autobind from 'autobind-decorator';
import {
  createTodo,
} from '../../actions';

const ENTER_KEY_CODE = 13;

@connect(
  state => ({
  }),
  dispatch => bindActionCreators({
    createTodo,
  }, dispatch)
)


export default class Main extends Component {

  @autobind
  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.props.createTodo({ name: e.target.value });
      this.refs.text.value = '';
    }
  }

  render() {
    return (
      <div className="main">
        <div className="input">
          <input ref="text"
          	className="input"
            type="text"
            placeholder="Add todo"
            onKeyDown={ this.handleKeyDown } />
        </div>
        <TodoList />
        <Search />
      </div>
    );
  }
};
