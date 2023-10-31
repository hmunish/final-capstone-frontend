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
    <section>
      <button className="mobmenu" type="button" onClick={toggleMenu}>
        <img src={menu} alt="menu" />
      </button>
      {isOpen && (
        <div className={styles.sidebarMenu}>
          <img alt="Logo" src={logo} className={styles.logo} />
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
                <NavLink to="/cars/delete">Delete Car</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
};

export default NavMenu;
