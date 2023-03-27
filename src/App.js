import React from 'react';
import './style.css';
import Header from './Header.js';
import Aside from './Aside.js';
import Main from './Main.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="contant">
          <Aside />
          <Main />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
