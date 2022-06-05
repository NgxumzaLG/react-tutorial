// RENDER COMPONENTS USING LIST (LOOP) ********************
// Render list of objects and wrap-it into components
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

// const names = ['lusanda', 'john', 'peter', 'susan'];
// const newNames = names.map((name) => {
//   return <h3>{name}</h3>;
// });

// function NameList() {
//   return <section className='booklist'>{newNames}</section>;
// }

// pass props as an Object *****OR USE SPREAD OPERATOR
function BookList() {
  return (
    <section className='booklist'>
      {books.map((item) => {
        return <Book key={item.id} book={item} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { title, author, image } = props.book;

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <h5>{author}</h5>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
