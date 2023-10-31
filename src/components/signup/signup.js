import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/signup/signupSlice';

function Signup() {
  const signUpData = useSelector((state) => state.signup);
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <section className="signup">
      <form
        onSubmit={(e) => {
          handleSignUp(e);
          dispatch(signUp(e.target.username.value));
        }}
      >
        <input
          type="text"
          placeholder="Username"
          className="text-input"
          name="username"
        />
        <input type="submit" value="Sign Up" className="form-submit" />
      </form>
      {signUpData.isSignedUp && <p>Username created successfully</p>}
      <Link className="form-switch-link" to="/signin">
        Already a user? Sign In
      </Link>
    </section>
  );
}

export default Signup;
