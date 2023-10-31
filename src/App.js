import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLogIn } from './redux/login/loginSlice';
import Login from './components/login/login';
import Cars from './components/Cars';
import NavMenu from './components/NavMenu';

function App() {
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogIn());
  }, [dispatch]);

  // Checking if the authentication token key exists
  const authKey = localStorage.getItem('authKey');
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
      </Routes>
    </main>
  );
}

export default App;
