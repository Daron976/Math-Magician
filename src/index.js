import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom/client'; // eslint-disable-line
import './index.css';
import CalculatorDom from './components/calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculatorDom />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
