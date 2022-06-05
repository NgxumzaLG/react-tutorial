// USE JAVASCRIPT IN JSX ********************

import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const author = 'Amelia Hepworth';

const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return (
    <article className='book'>
      <img
        src='https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg'
        alt=''
      />
      <h3>{title}</h3>
      <h5>{author.toUpperCase()}</h5>
      {/* <p>{let x = 1}</p>  ********Do not put a STATEMENT in JavaScript world rather an EXPRESSION*/}
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
