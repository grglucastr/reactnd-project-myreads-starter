import React from 'react'

import './App.css'
import Search from './Search';
import BookShelfs from './BookShelfs';

import { Route, Switch } from 'react-router-dom';

import * as BooksAPI from './BooksAPI'
import NoMatch from './NoMatch';

class BooksApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: [],
      shelfs: [
        {name: 'All the Books', slug:'none'},
        {name: 'Currently Reading', slug:'currentlyReading'},
        {name: 'Want to Read', slug:'wantToRead'},
        {name: 'Read', slug:'read'},
      ]
    }
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });    
  }
  
  changeShelf = (book, newShelf) => {
    this.setState(currentState => ({
      books: currentState.books.map((b)=>{
        if(b.id === book.id){
          b.shelf = newShelf
          BooksAPI.update(b, newShelf);
        }
        return b;
      })
    }));
  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path='/' render={() => (
            <BookShelfs 
                shelfs={this.state.shelfs} 
                books={this.state.books} 
                OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf)}/>
          )} />

        <Route path='/search' render={() => (
            <Search 
              OnChangeShelf={(sBook, sShelf) => this.changeShelf(sBook, sShelf)} />
          )}  />

        
        <Route render={NoMatch} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
