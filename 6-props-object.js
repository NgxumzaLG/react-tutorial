// PROPS OBJECT (COMPONENT PARAMETER OBJECT) ********************
// The parameter is the object and you can pass key/value pairs

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const title = 'I Love You to the Moon and Back'
const author = 'Amelia Hepworth'
const image =
  'https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book job='Developer' />
      <Book title='random title' number={44} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <h5>{author}</h5>
      <p>{props.title}</p>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
