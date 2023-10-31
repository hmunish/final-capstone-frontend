import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../redux/cars/carsSlice';
import Car from './Car';
import styles from '../CSS/Cars.module.css';
import Slider from './Slider';

const Cars = () => {
  const { cars, isLoading } = useSelector((state) => state.cars);
  const slideIndex = useSelector((state) => state.cars.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, cars.length]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>Cars Avaliable</h2>
      <p>Please select a vehicle</p>
      <p>
        Cars Listed:
        {cars.length}
      </p>

      <div className={styles.cars}>
        {cars.map((car) => (
          <div
            key={car.id}
            className={car.id === slideIndex ? styles.dblock : styles.dnone}
          >
            <Car
              name={car.name}
              image={car.image}
              description={car.description}
            />
          </div>
        ))}
      </div>
      <Slider />
    </div>
  );
};

export default Cars;
