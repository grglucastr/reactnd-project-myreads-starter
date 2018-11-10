import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({shelf, books}) => {
  return(
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.map((book, booksIndex) => (
            (book.shelf === shelf.slug ) ?
            (<li key={booksIndex}> <Book book={book} /> </li> ) :
            ('')
          ))
        }
      </ol>
    </div>
  )
}

export default BooksList;
BooksList.propTypes = {
  books: PropTypes.array.isRequired
}