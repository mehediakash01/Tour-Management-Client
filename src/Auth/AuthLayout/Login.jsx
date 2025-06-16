import { Link, useLocation, useNavigate } from "react-router";
import SocialButton from "./SocialButton";
import AuthInfo from "../../Hooks/AuthInfo";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = AuthInfo();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(state || "/", { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message} || something went wrong`,
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <h1 className="font-bold text-4xl my-3 text-center text-accent">Login Now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
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

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Your Password"
            required
          />
         

          <button type="submit" className="btn btn-secondary  mt-4">
            Login
          </button>
          <Link to={"/register"}>Don't have an account? Register</Link>
        </form>

        <SocialButton></SocialButton>
      </div>
    </div>
  );
};

export default Login;
