import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare', 'hola', 'estoy', 'en', 'una', 'lista'];

const peopleLis = Object.keys(people).map((person, i )=> 
  // expression goes here:
<li key={'person_'+i}>{person}</li>
);

// ReactDOM.render goes here:
console.log(peopleLis)
ReactDOM.render(peopleLis, document.getElementById('app'))