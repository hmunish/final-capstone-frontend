import { Link } from 'react-router-dom';

function Signup() {
  return (
    <section className="signup">
      <form>
        <input type="text" placeholder="Username" className="textInput" />
        <input type="submit" value="Sign Up" />
      </form>
      <p>Already a User ?</p>
      <Link to="/signin">Sign In</Link>
    </section>
  );
}

export default Signup;
