import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const [success, setSuccess] = useState("");
  const location=useLocation();
  const navigate=useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : '/');
        setSuccess(
          toast("login successful", {
            position: toast.POSITION.TOP_CENTER,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setLogError("Password is incorrect.");
          return;
        } else if (errorCode === "auth/user-not-found") {
          setLogError("User with this email does not exist.");
          return;
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-[#48A5EE]">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col">
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <div className="flex items-center justify-around">
                <img
                  className="w-[120px] h-[100px]"
                  src="https://i.ibb.co/MCrsWqq/logo-png.png"
                  alt=""
                />
                <a className=" normal-case text-3xl font-semibold text-[#48A5EE]">
                  Learning Academy
                </a>
              </div>
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered border-[#48A5EE]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#48A5EE] font-medium text-lg">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered border-[#48A5EE]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white hover:bg-[#48A5EE] bg-[#48A5EE]">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#00BFFF]">
            New Applicant ?{" "}
            <Link className="text-red-400" to="/register">
              Register
            </Link>
          </p>
          <div>
            {logError && (
              <p className="text-xl font-medium text-red-700 text-center">
                {logError}
              </p>
            )}
            {success && <ToastContainer></ToastContainer>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
