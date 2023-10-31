import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCars } from "../../redux/cars/carsSlice";

function AddReservation() {
  const { cars, isLoading } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const carId = searchParams.get("carId");

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
    <section className="add-reservation">
      <div className="green-overlay" />
      <div className="wrapper">
        <h2>Book a car test-ride</h2>
        <hr />
        <p>
          There are 34 different models of our car. We have showrooms all over
          the globe which some include test riding facilities. If you wish to
          find out if a test ride is available in your area, then choose your
          car, bike, and location below.
        </p>
        <form className="reservation-form">
          <input type="date" name="bookingDate" />
          <select>
            <option default>Location</option>
            <option value="london">London</option>
            <option value="newyork">New York</option>
            <option value="capetown">Cape Town</option>
          </select>
          <select>
            <option default>Car Model</option>
            {cars.map((car) => (
              <option
                key={car.id}
                value={car.id}
                selected={+carId === car.id ? true : ""}
              >
                {car.name}
              </option>
            ))}
          </select>
          <input type="submit" value="Book Now" />
        </form>
      </div>
    </section>
  );
}

export default AddReservation;
