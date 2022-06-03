// JSX RULES ********************
// Return single element
// div / section / article or Fragment
// Fragment - <> </> OR <React.Fragment> </React.Fragment>
// Use camelCase for html attributes
// className instead of class
// Close every element
// Formating

import React from "react";
import ReactDOM from "react-dom";

function Greeting2() {
  return (
    <div>
      <h3>My People</h3>
      <ul>
        <li>
          <a href="/">Lusanda</a>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Greeting2 />, document.getElementById("root"));
