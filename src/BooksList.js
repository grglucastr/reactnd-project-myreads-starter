import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksList extends Component {
  
  changeShelf = (book, newShelf) => {      
    this.props.OnChangeShelf(book, newShelf);
  }

  render(){
    const {shelf, books} = this.props;   
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book, booksIndex) => (
              (book.shelf === shelf.slug ) ?
              (
                <li key={booksIndex}> 
                  <Book 
                    OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf)} 
                    book={book} /> 
                </li> 
              ) :
              ('')
            ))
          }
        </ol>
      </div>
    )
  }
}

export default BooksList;
BooksList.propTypes = {
  books: PropTypes.array.isRequired
}