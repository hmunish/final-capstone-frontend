import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar, getCars } from "../../redux/cars/carsSlice";

const DeleteCar = () => {
  const { cars, isLoading, isUpdated } = useSelector((state) => state.cars);
  const { userId } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  if (isUpdated) {
    dispatch(getCars());
  }

  const handleDeleteCar = (carId) => {
    dispatch(deleteCar({ userId, carId }));
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
        <div className="cars-to-delete">
          <h1 className="delete-title">Delete Cars</h1>
          {cars.map((car) => (
            <div className="delete-car-item" key={car.id}>
              <p>{car.name}</p>
              <button
                className="delete-btn"
                onClick={() => handleDeleteCar(car.id)}
                type="button"
              >
                Delete
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
