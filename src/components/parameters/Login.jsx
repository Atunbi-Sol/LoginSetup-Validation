import React from "react";
import loginImg from "../../assets/login.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = ({ onRegister, onReset, onTogglePassword, onShowPassword }) => {
  return (
    <div className="main --flex-center bg-white">
      <div className="img-container">
        <img src={loginImg} alt="login-img" />
      </div>
      <div className="form-container">
        <form action="" className="--form-control">
          <h2 className="--color-danger ">Login</h2>
          <input type="text" className="--width-100" placeholder="Username" required />
          <div className="password">
            <input type={onShowPassword ? "text" : "password"} className="--width-100" placeholder="Password" required />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button className="--btn --btn-primary --btn-block">Login</button>
          <a href="#" className="--text-sm" onClick={onReset}>
            Forget Password
          </a>
          <span className="--text-sm --block">
            Don't have an account?
            <a href="#" className="--text-sm" onClick={onRegister}>
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
