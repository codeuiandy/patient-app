import React from "react";
import "./login.css";
import GoogleImg from "../../../assets/imgF/BadgeAndroid.png";
import IosImg from "../../../assets/imgF/BadgeiOS.png";
import Logo from "../../../assets/imgF/logo.png";
import check from "../../../assets/imgF/check.png";
export default function Login() {
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
            <img src={IosImg} alt="" />
            <img src={GoogleImg} alt="" />
          </div>
        </div>
      </div>
      <div className="authWrapCol2">
        <div className="logoContainerAuth">
          <img src={Logo} alt="" />
        </div>

        <div className="authHeaderCol2">
          <h2>Login into your Account</h2>
          <p>Fill in your valid credentials to continue.</p>
        </div>

        <form className="authForm">
          <div className="inputWrap">
            <input type="text" placeholder="example@gmail.coom" />
          </div>

          <div className="inputWrap">
            <input type="password" placeholder="Password" />
            <div className="passwordIcon">
              <img src={check} alt="" />
            </div>
          </div>

          <a className="forgotaassa">Forgot Password ?</a>

          <div className="authActionBtn">
            <button>Login into Account</button>
          </div>

          <div className="dontHavvAccAuth">
            <p>
              Dont have an account? <a> Register for one now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
