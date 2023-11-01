import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../CSS/NavMenu.module.css";
import menu from "../../assets/menu.png";
import logo from "../../assets/logo.jpg";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sidebar">
      <button className="mobmenu" type="button" onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </button>
      {isOpen && (
        <div className={styles.sidebarMenu}>
          <img alt="Logo" src={logo} className={styles.logo} />
          <nav className={styles.navigation}>
            <ul className={styles.navlist}>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.activeLink : "inactive")}
                  to="/"
                >
                  Cars
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.activeLink : "inactive")}
                  to="/reservations"
                >
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.activeLink : "inactive")}
                  to="/cars/new"
                >
                  New Car
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.activeLink : "inactive")}
                  to="/reservation/new"
                >
                  New Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.activeLink : "inactive")}
                  to="/cars/delete"
                >
                  Delete Car
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};

export default NavMenu;
