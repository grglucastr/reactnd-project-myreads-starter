import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksList extends Component {
  
  changeShelf = (book, newShelf) => {
    this.props.OnChangeShelf(book, newShelf);
  }

  render(){
    const {books} = this.props;   
    return(
      <ol className="books-grid">
        {
          books.map((book) => (
            <li key={book.id}> 
              <Book 
                OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf)} 
                book={book} /> 
            </li> 
          ))
        }
      </ol>
    )
  }
}

export default BooksList;
BooksList.propTypes = {
  shelf: PropTypes.object,
  books: PropTypes.array.isRequired,
  OnChangeShelf: PropTypes.func.isRequired
}