// CHILDREN PROPS ********************
// children props is a special name, that said you cannot rename it or won't be able to access it or use it
// children can be rendered anywhere in the component setup scope

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor quae
          repellendus, ad sint corrupti illum temporibus dolorem nisi vel!
        </p>
      </Book>
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
    </section>
  );
}

const Book = (props) => {
  const { title, author, image, children } = props;

  return (
    <article className='book'>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <h5>{author}</h5>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
