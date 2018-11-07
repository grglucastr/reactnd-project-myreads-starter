import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from './App';

import {Link, Route} from 'react-router-dom';


class Search extends Component {

  /**
   * TODO(1): Add on click to return to the main page
   * TODO(2): Apply search as type functionality
   * 
   */

  render(){
    return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>

        <Route exact path='/' Component={App}/>
      </div>
    )
  }
}

export default Search;