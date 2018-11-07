import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './Search';
import BooksList from './BooksList';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [
      {title: 'To Kill a Mockingbird', authors: ['Harper Lee'], shelf:'currentlyReading', image:''},
      {title: 'Ender\'s Game', authors: ['Orson Scott Card'], shelf:'currentlyReading', image: ''},
      {title: '1776', authors: ['David McCullough'], shelf:'wantToRead', image: ''},
      {title: 'Harry Potter and the Sorcerer\'s Stone', authors: ['J.K. Rowling'], shelf:'wantToRead', image:''},
      {title: 'The Hobbit', authors: ['J.R.R. Tolkien'], shelf:'read', image:''},
      {title: 'Oh, the Places You\'ll Go!', authors: ['Seuss'], shelf:'read', image:''},
      {title: 'The Adventures of Tom Sawyer', authors: ['Mark Twain'], shelf:'read', image:''},
    ]
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' component={ Search }  />
        <Route exact path='/'  component={ BooksList } />
      </div>
    )
  }
}

export default BooksApp
