import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../CSS/NavMenu.module.css';

const NavMenu = () => {
  (
    <header className={styles.mobmenu}>
      <img alt="Logo" />
      <nav className={styles.navigation}>
        <ul className={styles.navlist}>
          <li>
            <NavLink to="/cars">Cars</NavLink>
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
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
