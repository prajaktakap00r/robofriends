import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import Hello from './Hello'
import { robots } from './robots'; 
import Card from './card'
import CardList from './CardList';*/
import reportWebVitals from './reportWebVitals';
import 'tachyons';    //similar to bootstrap 
import RoboApp from './RoboApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>Prajakta here</h1>
    <App />  
    <Hello greetings={'Hello'+ 'Prajakta'} />
    */}
    <RoboApp/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
