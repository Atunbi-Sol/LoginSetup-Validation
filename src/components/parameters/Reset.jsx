import React from "react";
import forgotImg from "../../assets/forgot.svg";
import { AiOutlineClose } from "react-icons/ai";

const Reset = ({ onLogin }) => {
  return (
    <div className="main --flex-center reset bg-white">
      <div className="form-container ">
        <form action="" className="--form-control">
          <h2 className="--color-danger ">Reset Password</h2>
          <input type="email" className="--width-100" placeholder="Email" required />
          <button className="--btn --btn-primary --btn-block">Reset Password </button>
          <span className="--text-sm --block --text-center">we will send you a link!!!</span>
          <div className="close">
            <AiOutlineClose onClick={onLogin} />
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={forgotImg} alt="reset-img" />
      </div>
    </div>
  );
};

export default Reset;
