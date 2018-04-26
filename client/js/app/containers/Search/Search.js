import React, { Component } from 'react';
import styles from './search.scss';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
        	ref="text"
        	type="text"
        	placeholder="Search"
          onKeyUp={ this.handleKeyUp } />
      </div>
    );
  }
}
