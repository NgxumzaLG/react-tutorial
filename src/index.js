import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import { books } from './books';

function BookList() {
  return (
    <section className='booklist'>
      {books.map((item) => {
        return <Book key={item.id} {...item} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
