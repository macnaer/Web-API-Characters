import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// App component
import App from "./Components/App/App";

const Index = () => {
  return (
    <App />
  )
}
ReactDOM.render(<Index />, document.getElementById("root"));

