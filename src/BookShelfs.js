import React from 'react';
import BooksList from './BooksList';
import {Link} from 'react-router-dom';

const BookShelfs = ({shelfs, books}) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            {
              shelfs.map((shelf) => (
                (books.filter(book => book.shelf === shelf.slug).length > 0 ) ?
                (
                  <div className="bookshelf" key={shelf.slug}>
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <BooksList shelf={shelf} books={books} />
                  </div>
                ): ('')
              ))
            }
          </div>
          <div className="open-search">
            <Link to="/search">
              Add a book
            </Link>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default BookShelfs;
