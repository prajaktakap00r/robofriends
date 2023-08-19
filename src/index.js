import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import Hello from './Hello' */
import Card from './card'
import reportWebVitals from './reportWebVitals';
import 'tachyons';    //similar to bootstrap 
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>Prajakta here</h1>
    <App />  
    <Hello greetings={'Hello'+ 'Prajakta'} />
    */}
    <div>
      <Card id={robots[0].id} name={robots[0].name} userName={robots[0].username} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} userName={robots[1].username} email={robots[1].email}/>
      <Card id={robots[2].id} name={robots[2].name} userName={robots[2].username} email={robots[2].email}/>
    </div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
