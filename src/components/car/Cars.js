import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/cars/carsSlice";
import Car from "./Car";
import styles from "../../CSS/Cars.module.css";
import Slider from "../Slider";

const Cars = () => {
  const { cars, isLoading } = useSelector((state) => state.cars);
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
    <section className={styles.carsSection}>
      <div className={styles.titleBox}>
        <h2>Latest Models</h2>

        <p>Please select a car model</p>
      </div>
      <div id="slider" className={styles.cars}>
        {cars.map((car) => (
          <div key={car.id}>
            <Car
              id={car.id}
              name={car.name}
              image={car.image}
              description={car.description}
            />
          </div>
        ))}
      </div>
      <Slider />
    </section>
  );
};

export default Cars;
