import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import header from '../../images/nature.jpg';

const Header = () => {
    return (
        <div  style={{ backgroundImage:`url(${header})` }}  className="header">
        <h1 className="logo mt-5 fixed-top">Green Nature</h1>
        <nav className="nav fixed-top">
          <ul  className="mt-3">
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button className="btn btn-success text-white"><Link to="/login">Login</Link></button>
            </li>
            </ul>
          </nav>
           <div className="title-container text-white">
                <h1>Redux $ Typescript</h1>
            </div>
      
      </div>
    );
};

export default Header;