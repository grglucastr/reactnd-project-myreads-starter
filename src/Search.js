import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from './App';

import {Link, Route} from 'react-router-dom';
import BooksList from './BooksList';

class Search extends Component {

  state = {
    searchTerm: '',
    books: this.props.books
  }

  changeShelf(book, newShelf){
    this.props.OnChangeShelf(book, newShelf);
  }

  onSearch(event){
    const searchTerm = event.target.value.toLowerCase();
    this.setState({searchTerm});

    if(searchTerm.length > 0){
      this.setState((currentState) => ({
        books: currentState.books.filter(b => b.title.toLowerCase().indexOf(searchTerm) !== -1)
      }));
    }else{
      this.setState({books: this.props.books});
    }
  }

  render(){

    const { books } = this.state;
    
    return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" 
                     placeholder="Search by title or author"
                     name="searchTerm"
                     value={this.state.searchTerm}
                     onChange={(event) => this.onSearch(event)}
                     />
            </div>
          </div>
          <div className="search-books-results">
            <BooksList 
              books={books} 
              OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf) }  />
          </div>
        </div>

        <Route exact path='/' Component={App}/>
      </div>
    )
  }
}

export default Search;

Search.propTypes = {
  books: PropTypes.array.isRequired,  
  OnChangeShelf: PropTypes.func.isRequired
}
