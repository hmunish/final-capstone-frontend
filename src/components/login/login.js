import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Signup from '../signup/signup';
import { logIn } from '../../redux/login/loginSlice';

function Login() {
  const loginData = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const location = useLocation();

  // function
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(e.target.username.value));
  };

  // Checking if user is already login, if yes redirect to home page
  if (loginData.isLogIn) window.location.pathname = '/';

  if (location.pathname === '/signup') {
    return <Signup />;
  }

  return (
    <section className="login">
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="textInput"
          name="username"
          required
        />
        <input type="submit" value="Sign In" />
      </form>
      {loginData.isNewLoginError && <p>{loginData.isNewLoginError}</p>}
      <p className="form-switch-question">New User?</p>
      <Link to="/signup" className="form-switch-link">
        Sign Up
      </Link>
    </section>
  );
}

export default Login;
