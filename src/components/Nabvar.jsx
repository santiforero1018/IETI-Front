import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/navbar.css'; 

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/profile">
        <button type="button">Profile</button>
      </Link>
      <Link to="/">
        <button type="button">Log out</button>
      </Link>
      
    </div>
  );
}

export default Navbar;
