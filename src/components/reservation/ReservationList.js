import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../redux/reservations/reservationSlice";
import { getCars } from "../../redux/cars/carsSlice";

function ReservationList() {
  const { userId } = useSelector((state) => state.login);
  const { reservations, isLoading, isError } = useSelector(
    (state) => state.reservations
  );
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations(userId));
    dispatch(getCars());
  }, [dispatch, userId]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  if (reservations) {
    return (
      <section className="reservation-list">
        <div className="green-overlay" />
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>{reservation.date}</td>
                <td>{reservation.location}</td>
                <td>
                  {cars.filter((car) => car.id === reservation.car_id)[0]?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return <p>No reservations available</p>;
}

export default ReservationList;
