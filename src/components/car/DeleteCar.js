import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/carsSlice';

const DeleteCar = () => {
  const { cars, isLoading } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, cars.length]);

  const handleDeleteCar = () => {
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section>
      {cars.map((car) => (
        <div key={car.id}>
          <p>
            {car.name}
          </p>
          <button onClick={() => handleDeleteCar(car.id)} type="button">
            Delete
            {car.name}
          </button>
        </div>
      ))}
    </section>
  );
};

export default DeleteCar;
