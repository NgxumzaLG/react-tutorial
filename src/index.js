import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h3>This is Lusanda and this my first component</h3>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));