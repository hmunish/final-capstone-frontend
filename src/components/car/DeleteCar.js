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
      <section className="delete-cars-list">
        <div className="green-overlay" />
        <div className="add-car-form">
          {cars.map((car) => (
            <div className="delete-car-item" key={car.id}>
              <p>{car.name}</p>
              <button className="delete-btn" onClick={() => handleDeleteCar(car.id)} type="button">
                Delete
                {car.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return <p>Error loading cars</p>;
};

export default DeleteCar;
