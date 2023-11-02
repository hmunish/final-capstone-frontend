import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, getCars } from "../../redux/cars/carsSlice";

const DeleteCar = () => {
  const { cars, isLoading, isUpdated } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  if (isUpdated) {
    dispatch(getCars());
  }

  const handleDeleteCar = (carId) => {
    console.log(carId);
    dispatch(deleteCar({ carId }));
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (cars) {
    return (
      <section>
        {cars.map((car) => (
          <div key={car.id}>
            <p>{car.name}</p>
            <button onClick={() => handleDeleteCar(car.id)} type="button">
              Delete
              {car.name}
            </button>
          </div>
        ))}
      </section>
    );
  }

  return <p>Error loading cars</p>;
};

export default DeleteCar;
