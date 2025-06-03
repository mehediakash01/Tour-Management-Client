import { Link } from "react-router";
import SocialButton from "./SocialButton";

const Register = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <h1 className="font-bold text-4xl my-3 text-center">Register Now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          {/* Name */}

          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Enter Your Name"
          />
          {/* phot url */}
          <label className="label">Photo Url</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Enter Your Phot Url"
          />

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your email"
            required
          />

          {/* password */}

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              name="password"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <Link to={"/login"}>Already have an account? Login</Link>

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <SocialButton></SocialButton>
      </div>
    </div>
  );
};

export default Register;
