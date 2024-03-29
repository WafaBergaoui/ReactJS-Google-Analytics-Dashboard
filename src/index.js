import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// this Links are for design

//import "assets/plugins/nucleo/css/nucleo.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "assets/scss/argon-dashboard-react.scss";
//import './assets/plugins/nucleo/css/nucleo.css'
import './assets/scss/argon-dashboard-react.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
