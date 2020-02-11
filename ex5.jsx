import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare', 'hola', 'estoy', 'en', 'una', 'lista'];

const peopleLis = people.map(person => 
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'))