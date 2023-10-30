import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../redux/cars/carsSlice';

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
    <div>
      <p>
        Cars Listed:
        {cars.length}
      </p>
    </div>
  );
};

export default Cars;
