import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { UilTwitter, UilFacebookF, UilSignout } from '@iconscout/react-unicons';
import styles from "../../CSS/NavMenu.module.css";
import v from "../../assets/v.png";
import google from "../../assets/google.png";
import pinterest from "../../assets/pinterest.png";
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
        <>
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
          <div />
          <div className={styles.carSocialBox}>
            <UilTwitter />
            <UilFacebookF />
            <img style={{ width: '20px', height: '20px' }} src={v} alt="v icon" />
            <img style={{ width: '30px', height: '20px', marginLeft: '5px' }} src={google} alt="google icon" />
            <img style={{ width: '30px', height: '20px', marginLeft: '5px' }} src={pinterest} alt="pinterest icon" />
          </div>
          <p />
          2023 All right reserved

          <div>
            <UilSignout />
          </div>
        </>
      )}
    </section>
  );
};

export default NavMenu;
