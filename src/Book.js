import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component{

  changeShelf = (event) => {    
    const shelf = event.target.value;
    const book = this.props.book;
    this.props.book.shelf = shelf
    this.props.OnChangeShelf(book, shelf);
  }

  render(){

    const { book } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
                style={{ width: 128, 
                         height: 193, 
                         backgroundImage: `url( ${book.imageLinks && book.imageLinks.thumbnail ? 
                                               `${book.imageLinks.thumbnail}` : 
                                               `http://via.placeholder.com/128x193?text=No%20Cover`})` }}>
          </div>
          <div className="book-shelf-changer">
            <select 
              onChange={(event) => this.changeShelf(event)} 
              value={book.shelf ? book.shelf : 'none'}>

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors"> { book.authors ? book.authors.join(", ") : ''}</div>
      </div>
    )
  }
}

export default Book;
Book.propTypes = {
  book: PropTypes.object.isRequired,
  OnChangeShelf: PropTypes.func.isRequired,
}