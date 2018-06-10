import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
    <Navbar />
    <Main />
    <div className="fixed-action-btn">
      <Link to='/add' className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
    <Footer />
  </div>
)

export default App;
