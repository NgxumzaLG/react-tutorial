// EVENTS IN REACT ********************
// event handlers will be passed instances of SyntheticEvent

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    image:
      'https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg',
  },
  {
    id: 2,
    title: 'All Are Neighbors',
    author: 'Alexandra Penfold',
    image: 'https://images.randomhouse.com/cover/9780593429983',
  },
  {
    id: 3,
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
    image:
      'https://i1.sndcdn.com/artworks-MFYLG8RaHs79WXE7-yEjNGw-t500x500.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((item) => {
        return <Book key={item.id} {...item} />;
      })}
    </section>
  );
}

// eventHandler - Reference example
const Book = ({ title, author, image }) => {
  // atribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => console.log(e);
  const complexExample = (author) => console.log(author);

  return (
    <article className='book' onMouseOver={() => console.log(title)}>
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

// eventHandler - in-line function example
// const Book = ({ title, author, image }) => {
//   return (
//     <article className='book'>
//       <img src={image} alt='' />
//       <h3 onClick={() => console.log(title)}>{title}</h3>
//       <h5>{author}</h5>
//     </article>
//   );
// };

ReactDOM.render(<BookList />, document.getElementById('root'));
