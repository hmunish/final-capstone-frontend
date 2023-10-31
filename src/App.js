import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLogIn } from './redux/login/loginSlice';
import Login from './components/login/login';

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
      <h1>Main Page</h1>
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
