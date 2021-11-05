import React, { useState } from "react";
import "./login.css";
// import GoogleImg from "../../../assets/imgF/BadgeAndroid.png";
// import IosImg from "../../../assets/imgF/BadgeiOS.png";
import Logo from "../../../assets/imgF/logo.png";
import check from "../../../assets/imgF/check.png";
import Validatepassword from "../../helpers/validatePassword";
import EmailAuth from "../../helpers/emailAuth";
import { httpPost } from "../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../helpers/loader";
export default function Login() {
  const [authDetails, setAuthDetails] = useState({
    email: "",
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
      const data = new FormData();
      data.append("email", authDetails.email);
      const res = await httpPost(`password/reset-request?type=email`,data);
      hideLoader();
      if (res.status == false) {
        NotificationManager.error(res.message);
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
      <div className="authWrapCol1">
        <div className="authWrapCol1Container">
          <h2>Moving your Products Across Borders</h2>
          <p>
            Had some logistics hassle in the past. Worry no more, With our
            <br /> fast and fully automated system, you are guaranted a reliable
            <br />
            system
          </p>
          <div className="downloadAppAuthP">
            {/* <img src={IosImg} alt="" />
            <img src={GoogleImg} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="authWrapCol2">
        <div className="logoContainerAuth">
          <img src={Logo} alt="" />
        </div>

        <div className="authHeaderCol2">
          <h2>Reset password</h2>
          <p>Fill in your valid credentials to continue.</p>
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

         
{/* 
          <a className="forgotaassa">Login?</a> */}

          <div className="authActionBtn">
            <button onClick={handleSubmit}>Send reset email</button>
          </div>

          <div className="dontHavvAccAuth">
            {/* <p>
              Dont have an account? <a> Register for one now</a>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
}
