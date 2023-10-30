import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className="signup">
      <form>
        <input type="text" placeholder="Username" className="text-input" />
        <input type="submit" value="Sign Up" className="form-submit" />
      </form>
      <Link className="form-switch-link" to="/signin">
        Already a user? Sign In
      </Link>
    </section>
  );
}

export default Signup;
