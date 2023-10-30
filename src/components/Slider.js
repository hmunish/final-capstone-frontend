import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextCar, prevCar } from '../redux/cars/carsSlice';

const Slider = () => {
  const sliderIndex = useSelector((state) => state.cars.value);
  console.log('sliderIndex', sliderIndex);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(prevCar(sliderIndex - 1))}>Prev</button>
      <button type="button" onClick={() => dispatch(nextCar(sliderIndex + 1))}>Next</button>

    </div>
  );
};

export default Slider;
