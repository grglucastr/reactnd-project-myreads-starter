import React, { Component } from 'react';
import PropTypes from 'prop-types';

import App from './App';

import {Link, Route} from 'react-router-dom';
import BooksList from './BooksList';

import * as BooksAPI from './BooksAPI'

class Search extends Component {

  state = {
    searchTerm: '',
    books: [],
    booksFiltered: []
  }
  
  componentDidMount(){ 
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });    
  }
  
  changeShelf(book, newShelf){
    this.props.OnChangeShelf(book, newShelf);
  }

  onSearch(event){
    const searchTerm = event.target.value.toLowerCase();
    this.setState({searchTerm});

    if(searchTerm === ""){
      this.setState({booksFiltered: []});
      return;
    }

    const books = this.state.books.filter(b => {
      return (b.title.toLowerCase().indexOf(searchTerm) !== -1) ||
                (b.authors.join("").toLowerCase().indexOf(searchTerm) !== -1)
    });

    this.setState({booksFiltered: books});
  }

  render(){

    const { booksFiltered } = this.state;
    
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
              books={booksFiltered} 
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
  OnChangeShelf: PropTypes.func.isRequired
}
