import { FcGoogle } from "react-icons/fc";
import AuthInfo from "../../Hooks/AuthInfo";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialButton = () => {
  const { continueWithGoogle } = AuthInfo();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(state || "/" , {replace:true});
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message} || something went wrong`,
        });
      });
  };

  return (
    <div>
      <p className="text-center">or</p>
      <button onClick={handleGoogle} className="btn btn-info w-full">
        {" "}
        <FcGoogle /> Continue with Google
      </button>
    </div>
  );
};

export default SocialButton;
