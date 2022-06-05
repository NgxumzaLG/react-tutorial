// NESTED COMPONENTS PART 1 ********************

import React from 'react';
import ReactDOM from 'react-dom';

function Greeting3() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h3>Lusanda Ngxumza</h3>;
const Message = () => {
  return <p>From me to you and only you</p>;
};

// function BookList() {
//   return (
//     <section>
//       <Book />
//     </section>
//   )
// }

// const Book = () => {
//   return (
//     <article>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => {
//   return (
//     <img
//       src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L.jpg'
//       alt=''
//     />
//   )
// }

// const Title = () => <h3>I Love You to the Moon and Back</h3>
// const Author = () => <h5>Amelia Hepworth</h5>

ReactDOM.render(<Greeting3 />, document.getElementById('root'));
