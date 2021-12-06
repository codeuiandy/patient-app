import React, { useState, useEffect } from "react";
import "./riders.css";
import "./../users/users.css";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import check from "../../../assets/imgF/check_circle_black_24dp@2x.png";

import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import cancelIcon from "../../../assets/imgF/cancel_black_24dp@2x.png";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import Modal from "react-responsive-modal";
import pen from "../../../assets/imgF/pen.png";
import Image from "../../../assets/getImageUrl";
import { Input, Select } from "../../input/Input";
import { Button } from "../../buttons/index";
import ValidatePassword from "../../helpers/validatePassword";
import EmailAuth from "./../../helpers/emailAuth";
import { httpPost, httpGet } from "./../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "./../../helpers/loader";
import { useHistory } from "react-router-dom";
import redEllipse from "./../../../assets/imgF/red_ellipse.png";
import greenEllipse from "./../../../assets/imgF/green_ellipse.png";

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRiderInfoModal, setShowRiderInfoModal] = useState(false);
  const [tab, setTab] = useState("tab1");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [countryCode, setCountryCode] = useState("");
  // const [address, setAddress] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  // const [lga, setLga] = useState("");
  // const [fireToken, setFireToken] = useState("");
  // const [emailOpt, setEmailOpt] = useState("");
  // const [plateNumber, setPlateNumber] = useState("");

  const [rider, setRider] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
    countryCode: "234",
    address: "",
    country: "",
    state: "",
    lga: "",
    fireToken: null,
    emailOpt: true,
    plateNumber: "7bws63ser",
  });
  const [riders, setRiders] = useState([]);

  const history = useHistory();
  const handleTabSwitch = (index) => {
    setTab(index);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleRiderInfoModal = () => {
    setShowRiderInfoModal(!showRiderInfoModal);
  };

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRider({ ...rider, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!EmailAuth(rider.email)) {
      return;
    }
    if (!ValidatePassword(rider.password)) {
      return;
    } else {
      closeModal();
      showLoader();
      const response = await httpPost(`admin/create_rider`, rider);
      hideLoader();
      console.log("RESPONSE>>>", response);
      if (!response?.success) {
        return NotificationManager.error(response.message);
      } else {
        NotificationManager.success("Rider Added Succesfully");
        const newRider = rider;
        setRiders([...riders, newRider]);
        setRider({});
        history.push("/riders");
      }
      console.log(response);
    }
  };
  const getAllRiders = async () => {
    showLoader();
    const response = await httpGet(`admin/all_users?type=rider`);
    hideLoader();
    console.log("RESPONSE>>>", response);
    if (!response?.success) {
      return NotificationManager.error(response.message);
    }
    if (response.code === 200) {
      setRiders(response.data);
    }
    console.log(response);
  };

  const getSingleRider = async (id) => {
    showLoader();
    const response = await httpGet(`admin/all_users?type=rider`);
    hideLoader();
    console.log("RESPONSE>>>", response);
    if (!response?.success) {
      return NotificationManager.error(response.message);
    }
    if (response.code === 200) {
      setRider(response.data);
    }
    console.log(response);
  };

  useEffect(() => {
    getAllRiders();
  }, []);

  return (
    <div>
      <div className="tableHeader1">
        <h2>Riders</h2>
        <p>List of riders</p>
      </div>
      <div className="createNewRyderBtn">
        <button
          onClick={() => {
            openModal();
            setTab("tab1");
          }}
        >
          Create new rider
        </button>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p>All</p>
          <p>Activated</p>
          <p>Deactivated</p>
        </div>

        <div className="col2H2">
          <p>5 Orders</p>
          <select name="" id="">
            <option value="">Show 5 rows</option>
          </select>
        </div>
      </div>

      <div className="ordersYTableWrap">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Deliveries</th>
              <th>Status</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {riders.length ? (
              riders.map((rider) => {
                const {
                  id,
                  avatar,
                  firstName,
                  lastName,
                  phoneNumber,
                  email,
                  isOnline,
                  countryCode,
                } = rider;
                return (
                  <tr key={id} onClick={toggleRiderInfoModal}>
                    <td>
                      <img
                        class="userProfileImg"
                        src={avatar || codeuiandy}
                        alt=""
                      />
                      {`${firstName} ${lastName}`}
                    </td>
                    <td>{`${countryCode} ${phoneNumber}`}</td>
                    <td>{email}</td>
                    <td>{`50`}</td>
                    <td>
                      <img
                        src={isOnline ? greenEllipse : redEllipse}
                        alt="online status"
                        className="rider--isOnline img--ellipse"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>No rider found</p>
            )}
          </tbody>
        </table>
        <div className="tableControls">
          <div className="tableControlsContrl">
            <p>1</p>
          </div>

          <div className="tableControlsContrl">
            <p>2</p>
          </div>

          <div className="tableControlsContrl">
            <p>3</p>
          </div>

          <div className="tableControlsContrl">
            <p>4</p>
          </div>

          <img className="tabsdkshSt" src={arrowR} alt="" />
        </div>
      </div>

      <Modal open={showModal} onClose={closeModal} center>
        <div className="createRiderModal">
          <div className="riderModalContainer">
            <div className="col1Rider">
              <h2>Create new rider</h2>
              <ul>
                <li
                  className={`${
                    (tab == tab) == "tab1" ||
                    tab == "tab2" ||
                    tab == "tab3" ||
                    tab == "tab4"
                      ? "activeBTab"
                      : ""
                  }`}
                >
                  <div
                    className="tabPositionRider"
                    style={
                      tab == "tab1" ||
                      tab == "tab2" ||
                      tab == "tab3" ||
                      tab == "tab4"
                        ? { background: "orange" }
                        : {}
                    }
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Profile</span>
                </li>
                <li
                  className={`${
                    tab == "tab2" || tab == "tab3" || tab == "tab4"
                      ? "activeBTab"
                      : ""
                  }`}
                >
                  <div
                    className="tabPositionRider"
                    style={
                      tab == "tab2" || tab == "tab3" || tab == "tab4"
                        ? { background: "orange" }
                        : {}
                    }
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Contact</span>
                </li>{" "}
                <li
                  className={`${
                    tab == "tab3" || tab == "tab4" ? "activeBTab" : ""
                  }`}
                >
                  <div
                    className="tabPositionRider"
                    style={
                      tab == "tab3" || tab == "tab4"
                        ? { background: "orange" }
                        : {}
                    }
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Password</span>
                </li>{" "}
                {/* <li className={`${tab == "tab4" ? "activeBTab" : ""}`}>
                  <div
                    className="tabPositionRider"
                    style={tab == "tab4" ? { background: "orange" } : {}}
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Assign a bike</span>
                </li> */}
              </ul>
            </div>

            {tab == "tab1" ? (
              <div className="col2Rider">
                <div className="addprofileRiderWrap">
                  <p>Add a profile picture</p>
                  <div className="profileImageRiderWrap">
                    <div className="profileImageRiderWrapAvatar">
                      <Image path="person.png" />
                    </div>
                    <img className="penEditRider" src={pen} alt="" />
                  </div>
                </div>

                <form className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input
                      label="First name"
                      name="firstName"
                      value={rider.firstName}
                      onChange={onChange}
                      placeholder="Andrew"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      label="Last name"
                      name="lastName"
                      value={rider.lastName}
                      onChange={onChange}
                      placeholder="Okeke"
                    />
                  </div>

                  {/* <div className="riderInputWrapMain">
                    <Input label="Middle name"  placeholder="Miracle" />
                  </div> */}

                  <div className="getRiderGender">
                    <p>Gender</p>

                    <label>
                      <input
                        style={{ Width: "20px" }}
                        type="radio"
                        name="gender"
                        id=""
                      />
                      <span>Male</span>
                    </label>

                    <label>
                      <input
                        style={{ Width: "20px" }}
                        type="radio"
                        name="gender"
                        id=""
                      />
                      <span>Female</span>
                    </label>

                    <label>
                      <input
                        style={{ Width: "20px" }}
                        type="radio"
                        name="gender"
                        id=""
                      />
                      <span>Other</span>
                    </label>
                  </div>
                  <div className="subRiderBtnWrap">
                    <Button
                      text="Cancel"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                    />
                    <Button
                      onClick={() => {
                        handleTabSwitch("tab2");
                      }}
                      text="Next"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}

            {tab == "tab2" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input
                      name="phoneNumber"
                      value={rider.phoneNumber}
                      onChange={onChange}
                      label="Phone number"
                      placeholder="08115659965"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      name="email"
                      value={rider.email}
                      onChange={onChange}
                      label="Email"
                      placeholder="frostandy41@gmail.com"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Select
                      name="country"
                      value={rider.country}
                      options={["Nigeria", "England"]}
                      defaultValue="Select Country"
                      label="Select Country"
                      onChange={onChange}
                    />
                  </div>
                  <div className="riderInputWrapMain">
                    <Select
                      name="state"
                      value={rider.state}
                      options={["Lagos", "Abuja"]}
                      defaultValue="Select State"
                      label="Select State"
                      onChange={onChange}
                    />
                  </div>
                  <div className="riderInputWrapMain">
                    <Select
                      name="lga"
                      value={rider.lga}
                      options={["Ikeja", "Surulere"]}
                      defaultValue="Select LGA"
                      label="Select LGA"
                      onChange={onChange}
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      name="address"
                      value={rider.address}
                      onChange={onChange}
                      label="Address"
                      placeholder="Lagos street"
                    />
                  </div>

                  <div className="subRiderBtnWrap">
                    <Button
                      onClick={() => {
                        handleTabSwitch("tab1");
                      }}
                      text="Back"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                    />
                    <Button
                      onClick={() => {
                        handleTabSwitch("tab3");
                      }}
                      text="Next"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}

            {tab == "tab3" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input
                      name="password"
                      value={rider.password}
                      onChange={onChange}
                      label="Password"
                      placeholder="********"
                      type="password"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      name="password"
                      value={rider.password}
                      onChange={onChange}
                      label="Confirm password"
                      placeholder="********"
                      type="password"
                    />
                  </div>

                  <div className="subRiderBtnWrap">
                    <Button
                      onClick={() => {
                        handleTabSwitch("tab2");
                      }}
                      text="Back"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                    />
                    <Button
                      onClick={handleSubmit}
                      text="Create rider"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}

            {/* {tab == "tab4" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Select
                      options={["Okada", "Moto"]}
                      defaultValue="Select bike"
                      label="Select bike"
                    />
                  </div>

                  <div className="subRiderBtnWrap">
                    <Button
                      text="Cancel"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                    />
                    <Button
                      onClick={handleSubmit}
                      text="Create rider"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>
      </Modal>

      <Modal open={showRiderInfoModal} onClose={toggleRiderInfoModal} center>
        <div className="viewUserModalWrap">
          <div className="modalHeader">
            <p>Rider Info</p>{" "}
            <img
              onClick={toggleRiderInfoModal}
              style={{ cursor: "pointer" }}
              src={cancelIcon}
              alt=""
            />
          </div>

          <div className="viewUserModalInfod">
            <div className="viewUserModalInfodCol1">
              <div className="userImgwrapViwp">
                <img src={rider?.avatar || userImg} alt="" />
              </div>
              <p> {`${rider.firstName} ${rider.lastName}` || "Okeke Andrew"}</p>
              <p className="viewUserModalInfodCol1Status">
                <span>Status </span>{" "}
                <span
                  className={`${
                    rider.status === "active" ? "active" : "inActive"
                  }`}
                >
                  {rider.status === "active" ? "Active" : "Deactivated"}
                </span>
              </p>
              <button
                className={`${
                  rider.status === "active" ? "deActivate" : "activate"
                }`}
              >
                {rider.status === "active"
                  ? "Deactivate user"
                  : "Activate user"}
              </button>
            </div>
            <div className="viewUserModalInfodCol2">
              <div className="userDetailsCol2">
                <p>Phone number</p>
                <p>
                  {`${rider?.countryCode} ${rider?.phoneNumber}` ||
                    "+234 9045 345 7865"}
                </p>
              </div>

              <div className="userDetailsCol2">
                <p>Country</p>
                <p>{rider.country || "Nigeria"}</p>
              </div>

              <div className="userDetailsCol2">
                <p>State</p>
                <p>{rider.state || "Lagos"}</p>
              </div>

              <div className="userDetailsCol2">
                <p>Address</p>
                <p>{rider.address || "Off Alausa, Obafemi awolowo road"}</p>
              </div>

              <div className="userDetailsCol2 ">
                <p>Deliveries made</p>
                <p className=" userDetailsCol2lasdf">
                  50
                  <span>
                    {" "}
                    <img src={check} alt="" /> (45)
                  </span>
                  <span>
                    {" "}
                    <img src={cancelIcon} alt="" /> (15)
                  </span>
                  <a href="">View all</a>
                </p>
              </div>
              <div className="userDetailsCol2 ">
                <p>Average rating</p>
                <p className=" userDetailsCol2lasdf">
                  50
                  <span>
                    {" "}
                    <img src={check} alt="" /> (45)
                  </span>
                  <span>
                    {" "}
                    <img src={cancelIcon} alt="" /> (15)
                  </span>
                  <a href="">View all</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
