import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

// style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}
class BooksList extends Component {

  constructor(props){
    super(props);
    
  }


  render(){

    const { books } = this.props;
    const booksReading = books.filter(book => book.shelf === "currentlyReading");
    const booksWantRead = books.filter(book => book.shelf === "wantToRead");
    const booksRead = books.filter(book => book.shelf === "read");

    return(
      <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <h1>Currently Reading</h1>

              <ul>
                {
                  booksReading.map(({title}, index) => (
                    <li key={index}>{title}</li>
                  )) 
                }   
              </ul>              

              <h1>Want to Read</h1>
              <ul>
                {
                  booksWantRead.map(({title}, index) => (
                    <li key={index}>{title}</li>
                  )) 
                }   
              </ul>

              <h1>Read</h1>
              <ul>
                {
                  booksRead.map(({title}, index) => (
                    <li key={index}>{title}</li>
                  )) 
                }   
              </ul>
            
              
            </div>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
      </div>
    )
  }
}

{/* <div className="bookshelf">
  <h2 className="bookshelf-title">Currently Reading</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">To Kill a Mockingbird</div>
          <div className="book-authors">Harper Lee</div>
        </div>
      </li>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">Ender's Game</div>
          <div className="book-authors">Orson Scott Card</div>
        </div>
      </li>
    </ol>
  </div>
</div> */}

export default BooksList;
BooksList.propTypes = {
  books: PropTypes.array.isRequired
}