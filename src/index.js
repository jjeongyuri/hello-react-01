import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Sample from './Sample';
// import * as serviceWorker from './serviceWorker';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sample />
  </React.StrictMode>
);
// ReactDOM.render(<Sample/> ,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister();
