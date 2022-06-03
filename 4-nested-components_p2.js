import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://littleslothco.co.za/3237-medium_default/i-love-you-to-the-moon-and-back-by-amelia-hepworth.jpg'
      alt=''
    />
  )
}

const Title = () => <h3>I Love You to the Moon and Back</h3>
const Author = () => (
  <h5 style={{ color: '#617d98', marginTop: '0.25rem' }}>Amelia Hepworth</h5>
)

ReactDOM.render(<BookList />, document.getElementById('root'))
