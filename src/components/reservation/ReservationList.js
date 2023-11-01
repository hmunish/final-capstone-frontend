import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../../redux/reservations/reservationSlice";

function ReservationList() {
  const { userId } = useSelector((state) => state.login);
  const { reservations, isLoading, isError } = useSelector(
    (state) => state.reservations,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations(userId));
  }, [dispatch, userId]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  console.log(reservations);

  return <section className="reservation-list">Reservation List</section>;
}

export default ReservationList;
