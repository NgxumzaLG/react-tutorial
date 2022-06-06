import React from 'react';

const Book = ({ title, author, image }) => {
  const clickHandler = (e) => console.log(e);
  const complexExample = (author) => console.log(author);

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <h5>{author}</h5>
      <button type='button' onClick={clickHandler}>
        Reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};

export default Book;
