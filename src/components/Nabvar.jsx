import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../css/navbar.module.css'; 

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
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
