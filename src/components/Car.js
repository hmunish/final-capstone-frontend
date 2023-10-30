import React from 'react';
import PropTypes from 'prop-types';
import styles from '../CSS/Car.module.css';

const Car = ({
  name, image, description,
}) => (
  <div className={styles.car}>
    <div>
      <img src={image} alt="car" />
    </div>
    <div>
      <p>
        Car Name:
        {' '}
        {name}
      </p>
      <p>
        Car Description:
        {' '}
        {description}
      </p>
      <hr />
      <div>
        <img alt="Social Media Icon" />
        <img alt="Social Media Icon" />
        <img alt="Social Media Icon" />
      </div>
    </div>
  </div>
);

Car.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

Car.defaultProps = {
  name: '',
  image: '',
  description: '',
};

export default Car;
