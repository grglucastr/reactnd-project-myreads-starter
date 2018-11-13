import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <h1>Sorry... We couldn't find what you are looking for...</h1>
        <Link to="/">Back</Link>
      </div>
    </div>
  )
}

export default NoMatch;