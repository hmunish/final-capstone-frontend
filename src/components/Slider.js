import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextCar, prevCar } from '../redux/cars/carsSlice';
import styles from '../CSS/Slider.module.css';

const Slider = () => {
  const sliderIndex = useSelector((state) => state.cars.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.prevnextbtns}>
      <button type="button" onClick={() => dispatch(prevCar(sliderIndex - 1))}>Prev</button>
      <button type="button" onClick={() => dispatch(nextCar(sliderIndex + 1))}>Next</button>

    </div>
  );
};

export default Slider;
