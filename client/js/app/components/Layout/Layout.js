import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../../containers/Main/Main';
import styles from './layout.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className="todo">
        <Header/>
        <Main />
      </div>
    )
  }
}
