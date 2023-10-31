import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../CSS/NavMenu.module.css';
import menu from '../assets/menu.png';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="mobmenu" type="button" onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </button>
      {isOpen && (
      <header className={styles.mobmenu}>
        <img alt="Logo" />
        <nav className={styles.navigation}>
          <ul className={styles.navlist}>
            <li>
              <NavLink to="/">Cars</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/cars/new">New Car</NavLink>
            </li>
            <li>
              <NavLink to="/reservations/new">New Reservation</NavLink>
            </li>
            <li>
              <NavLink to="/reservations/remove">Delete Reservation</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      )}
    </div>
  );
};

export default NavMenu;
