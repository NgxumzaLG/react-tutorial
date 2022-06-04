// REACT CREATE ELEMENT ********************

import React from 'react'
import ReactDOM from 'react-dom'

// JSX example
// function ExampleElem() {
//   return (
//     <div>
//       <h3>React component</h3>
//     </div>
//   );
// }

// Before JSX
const ExampleElem = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h4', {}, 'Hello World, This is just an example')
  )
}

ReactDOM.render(<ExampleElem />, document.getElementById('root'))
