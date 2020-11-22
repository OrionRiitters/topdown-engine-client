import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from 'react-dom'

import MyComponent from './components/MyComponent';
import request from './request';


const hey = request()

const domContainer = document.getElementById('react-container');
console.log(domContainer)
ReactDOM.render(MyComponent(), domContainer);