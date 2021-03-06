// PROPS OBJECT (COMPONENT PARAMETER OBJECT) ********************
// The parameter is the object and you can pass key/value pairs

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const title = 'I Love You to the Moon and Back'
// const author = 'Amelia Hepworth'
// const image = 'https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg'

const firstBook = {
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
  image:
    'https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg',
};

const secondBook = {
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
  image: 'https://i1.sndcdn.com/artworks-MFYLG8RaHs79WXE7-yEjNGw-t500x500.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
    </section>
  );
}

// const Book = ({ title, author, image }) => {} *****OR Use deconstruction like this
const Book = (props) => {
  const { title, author, image } = props;

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <h5>{author}</h5>
    </article>
  );
};

// function BookList() {
//   return (
//     <section className='booklist'>
//       <Book job='Developer' />
//       <Book title='random title' number={44} />
//     </section>
//   )
// }

// const Book = (props) => {
//   return (
//     <article className='book'>
//       <img src={image} alt='' />
//       <h3>{title}</h3>
//       <h5>{author}</h5>
//       <p>{props.title}</p>
//       <p>{props.job}</p>
//       <p>{props.number}</p>
//     </article>
//   )
// }

ReactDOM.render(<BookList />, document.getElementById('root'));
