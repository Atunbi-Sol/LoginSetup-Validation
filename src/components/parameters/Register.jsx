import React, { useEffect, useState } from "react";
import registerImg from "../../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const Register = ({ onLogin, onShowPassword, onTogglePassword}) => {

  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);



  const handleShowIndicator = () => {
    setShowIndicator(!showIndicator);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  useEffect(() => {
    if (pass.match(/([a-z].*[A-Z]|[A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }
    if (pass.match(/([!,%,&,@,#,?,^,*,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }
    if (pass.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLetter, passNumber, passLength, passChar]);

  return (
    <div className="main --flex-center bg-white">
      <div className="form-container">
        <form action="" className="--form-control">
          <h2 className="--color-danger ">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" required />
          <input type="email" className="--width-100" placeholder="Email" required />
          <div className="password">
            <input
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordChange}
              required
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <button
            onClick={() => alert(pass)}
            disabled={!passComplete}
            className={passComplete ? "--btn --btn-primary --btn-block" : "--btn --btn-primary --btn-block btn-disabled"}>
            Register
          </button>
          <span className="--text-sm --block">
            Have an account?
            <a href="#" className="--text-sm" onClick={onLogin}>
              Login
            </a>
          </span>

          <div className={showIndicator ? "showIndicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm ">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoDotFill />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoDotFill />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoDotFill />}
                  &nbsp; Special Character (!%&@#?^*_~)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> : <GoDotFill />}
                  &nbsp; At least 8 Character
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="reg-img" />
      </div>
    </div>
  );
};

export default Register;
