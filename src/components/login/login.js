import { Link, useLocation } from 'react-router-dom';
import Signup from '../signup/signup';

function Login() {
  const location = useLocation();
  if (location.pathname === '/signup') {
    return <Signup />;
  }
  return (
    <section className="login">
      <form>
        <input type="text" placeholder="Username" className="textInput" />
        <input type="submit" value="Sign In" />
      </form>
      <Link to="/signup">Sign Up</Link>
    </section>
  );
}

export default Login;
