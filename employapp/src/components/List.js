import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <ul className="list-group">
      {props. componentDidMount.map(item => (
        <li className="list-group-item" >
          {item.name.first}
        
        </li>
      ))}
    </ul>
  );
}

export default List;


