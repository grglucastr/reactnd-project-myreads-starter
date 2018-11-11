import React, {Component} from 'react';
import BooksList from './BooksList';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';

class BookShelfs extends Component {

  changeShelf = (book, newShelf) => {
    this.props.OnChangeShelf(book, newShelf)
  }

  render(){
    
    const {shelfs, books} = this.props;

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
                      <div className="bookshelf-books">
                        <BooksList 
                          shelf={shelf} 
                          books={books.filter(b => b.shelf === shelf.slug)} 
                          OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf) } />
                      </div>
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
}

export default BookShelfs;

BookShelfs.propTypes = {
  shelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  OnChangeShelf: PropTypes.func.isRequired,
}