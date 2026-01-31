import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import App from './App';
import Track from "./Track";
import Target from "./Target";
import Calories from "./Calories";
import Image from "./Fleximage";
import BlankPage from './Blankpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Target />
    <Track />
    <Calories />
    <Image />
    <BlankPage/>
  </React.StrictMode>
);

