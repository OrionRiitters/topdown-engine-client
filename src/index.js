import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from 'react-dom'

import configData from './data/config.json';
import MyComponent from './components/MyComponent';
import Canvas from './canvas';
import imageService from './services/imageService';

Canvas.initialize(configData.canvas);
const domContainer = document.getElementById('react-container');
ReactDOM.render(MyComponent(), domContainer);