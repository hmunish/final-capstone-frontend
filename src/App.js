import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isLogIn } from "./redux/login/loginSlice";
import Login from "./components/login/login";
import Cars from "./components/car/Cars";
import NavMenu from "./components/nav/NavMenu";
import AddReservation from "./components/reservation/AddReservation";
import ReservationList from "./components/reservation/ReservationList";
import AddCar from "./components/car/AddCar";
import CarDetail from "./components/car/CarDetail";
import DeleteCar from "./components/car/DeleteCar";

function App() {
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogIn());
  }, [dispatch]);

  // Checking if the authentication token key exists
  const authKey = localStorage.getItem("authKey");
  // If authKey does not exist display login page
  if (!authKey) {
    return <Login />;
  }

  if (loginData.isLoading) return <p className="status">Logging In...</p>;
  if (loginData.isError) {
    return <Login />;
  }

  return (
    <main>
      <NavMenu />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Cars />} />
        <Route path="/cars/new" element={<AddCar />} />
        <Route path="/car/details/:carId?" element={<CarDetail />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/reservation/new/:carId?" element={<AddReservation />} />
        <Route path="/cars/delete" element={<DeleteCar />} />
      </Routes>
    </main>
  );
}

export default App;
