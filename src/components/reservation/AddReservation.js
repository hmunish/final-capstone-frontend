import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCars } from "../../redux/cars/carsSlice";
import { addReservation } from "../../redux/reservations/reservationSlice";

const AddReservation = () => {
  const { cars, isLoading } = useSelector((state) => state.cars);
  const { isCreated, isError } = useSelector((state) => state.reservations);
  const { userId } = useSelector((state) => state.login);
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

  const handleAddReservation = (e) => {
    e.preventDefault();
    const bookingDate = e.target.bookingDate.value;
    const location = e.target.location.value;
    const carId = e.target.carId.value;
    dispatch(
      addReservation({
        userId,
        bookingDate,
        location,
        carId,
      }),
    );
  };
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
        <form
          className="reservation-form"
          onSubmit={(e) => handleAddReservation(e)}
        >
          <input type="date" name="bookingDate" required />
          <select name="location" required>
            <option default>Location</option>
            <option value="london">London</option>
            <option value="newyork">New York</option>
            <option value="capetown">Cape Town</option>
          </select>
          <select name="carId" required>
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
        <p>{isError && isError}</p>
        <p>{isCreated && "Reservation added successfully"}</p>
      </div>
    </section>
  );
};

export default AddReservation;
