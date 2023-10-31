import React from "react";
import PropTypes from "prop-types";
import styles from "../CSS/Car.module.css";
import carImg from "../assets/car-1.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";

const Car = ({ name, image, description }) => (
  <div className={styles.car}>
    <div>
      <img src={carImg} alt={image} className={styles.carImg} />
    </div>
    <div className={styles.carDetailsBox}>
      <p className={styles.carName}>{name}</p>
      <p className={styles.carDescription}>{description}</p>
    </div>
    <div className={styles.carSocialBox}>
      <img src={fb} alt="Social Media Icon" />
      <img src={twitter} alt="Social Media Icon" />
      <img src={insta} alt="Social Media Icon" />
    </div>
  </div>
);

Car.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

Car.defaultProps = {
  name: "",
  image: "",
  description: "",
};

export default Car;
