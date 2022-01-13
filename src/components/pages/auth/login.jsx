import React, { useState } from "react";
import "./login.css";
// import GoogleImg from "../../../assets/imgF/BadgeAndroid.png";
// import IosImg from "../../../assets/imgF/BadgeiOS.png";
import Logo from "../../../assets/imgF/logo.png";
// import check from "../../../assets/imgF/check.png";
import Validatepassword from "../../helpers/validatePassword";
import EmailAuth from "../../helpers/emailAuth";
import { httpPost } from "../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../helpers/loader";
export default function Login() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EmailAuth(authDetails.email) == false) {
      return;
    }
    // if (Validatepassword(authDetails.password) == false) {
    //   return;
    // }
    else {
      showLoader();
      const res = await httpPost("auth/admin_login", authDetails);
      hideLoader();
      console.log("RES>>>", res);
      if (!res?.success) {
        return NotificationManager.error(res.message);
      } else {
        NotificationManager.success("Login successful");
        localStorage.setItem("token", res.data.token);
        window.location.href = "/home";
      }
      console.log(res);
    }
  };

  return (
    <div className="authWrap">
      <div className="authWrapCol2">
        <div className="logoContainerAuth">
          <img src={Logo} alt="" />
        </div>

        <div className="authHeaderCol2">
          <h2>Login into your Account</h2>
          <p>Enter your credentials to gain access into the admin portal</p>
        </div>

        <form className="authForm">
          <div className="inputWrap">
            <input
              type="text"
              placeholder="example@gmail.coom"
              value={authDetails.email}
              onChange={({ target }) =>
                setAuthDetails({ ...authDetails, email: target.value })
              }
            />
          </div>

          <div className="inputWrap">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              value={authDetails.password}
              onChange={({ target }) =>
                setAuthDetails({ ...authDetails, password: target.value })
              }
            />
            <div className="passwordIcon">
              {/* <img
                onClick={() => setShowPassword(!showPassword)}
                src={check}
                alt=""
              /> */}
            </div>
          </div>

          <a className="forgotaassa">Forgot Password ?</a>

          <div className="authActionBtn">
            <button onClick={handleSubmit}>Login into Account</button>
          </div>

          {/* <div className="dontHavvAccAuth">
            <p>
              Dont have an account? <a> Register for one now</a>
            </p>
          </div> */}
        </form>
      </div>

      <div className="authWrapCol1"></div>
    </div>
  );
}
