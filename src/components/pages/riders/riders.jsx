import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import Modal from "react-responsive-modal";
import { useHistory } from "react-router-dom";
import Image from "../../../assets/getImageUrl";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import cancelIcon from "../../../assets/imgF/cancel_black_24dp@2x.png";
import check from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import {
  default as codeuiandy,
  default as userImg,
} from "../../../assets/imgF/codeuiandyimg.png";
import pen from "../../../assets/imgF/pen.png";
import { Button } from "../../buttons/index";
import ValidatePassword from "../../helpers/validatePassword";
import { Input, Select } from "../../input/Input";
import greenEllipse from "./../../../assets/imgF/green_ellipse.png";
import redEllipse from "./../../../assets/imgF/red_ellipse.png";
import { httpGet, httpPost } from "./../../../helpers/httpMethods";
import EmailAuth from "./../../helpers/emailAuth";
import { hideLoader, showLoader } from "./../../helpers/loader";
import "./../users/users.css";
import "./riders.css";
import moment from "moment";

const Orders = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRiderInfoModal, setShowRiderInfoModal] = useState(false);
  const [tab, setTab] = useState("tab1");
  const [filterridersSt, setFilterriders] = useState([]);
  const [orderType, setOrderType] = useState("all");
  const [rider, setRider] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    address: "",
    country: "",
    state: "",
    lga: "",
    fireToken: null,
    emailOpt: true,
    plateNumber: "",
  });
  const [riders, setRiders] = useState([]);
  const [userP, setUserP] = useState({
    patientID: "",
    dueDate: new Date(),
    procedure: "",
    nurseID: "",
    doctorID: "",
  });
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

  const submitData = async (e) => {
    e.preventDefault();
    if (
      userP.patientID == "" ||
      userP.procedure == "" ||
      userP.nurseID == "" ||
      userP.doctorID == ""
    ) {
      return NotificationManager.error("All field is required to continue ");
    }
    closeModal();
    showLoader();

    const data = {
      patientID: userP.patientID,
      dueDate: moment(userP.dueDate).format("YYYY-MM-DD"),
      procedure: userP.procedure,
      nurseID: userP.nurseID,
      doctorID: userP.doctorID,
    };
    console.log(data);
    const response = await httpPost(`/book_appointment`, data);
    hideLoader();
    console.log("RESPONSE>>>", response);
    if (!response?.responsecode == "200") {
      return NotificationManager.error("Server down");
    } else {
      NotificationManager.success("Patient Added Succesfully");
      const newRider = rider;
      getAllRiders();
      // setRider({});
      // history.push("/riders");
    }
    console.log(response);
  };
  const getAllRiders = async () => {
    showLoader();
    const response = await httpPost(`/reports`);
    hideLoader();
    console.log("RESPONSE>>>", response);
    if (response.responsecode == "200") {
      setRiders(response.patientreport);
      console.log("response.patientreport", response.patientreport);
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

  const filterriders = (type) => {
    switch (type) {
      case "active":
        let filteractiveriders = riders.filter((data) => {
          return data.status == type;
        });
        setFilterriders(filteractiveriders);
        console.log(filteractiveriders);
        break;

      case "inactive":
        let filterinactiveriders = riders.filter((data) => {
          return data.status == type;
        });
        setFilterriders(filterinactiveriders);
        console.log(filterinactiveriders);
        break;

      case "unverified":
        let filterunverifiedriders = riders.filter((data) => {
          return data.status == type;
        });
        setFilterriders(filterunverifiedriders);
        console.log(filterunverifiedriders);
        break;

      case "suspended":
        let filtersuspendedriders = riders.filter((data) => {
          return data.status == type;
        });
        setFilterriders(filtersuspendedriders);
        console.log(filtersuspendedriders);
        break;

      case "deleted":
        let filterdeletedriders = riders.filter((data) => {
          return data.status == type;
        });
        setFilterriders(filterdeletedriders);
        console.log(filterdeletedriders);
        break;

      default:
        setFilterriders(riders);
        break;
    }
  };

  return (
    <div>
      <div className="tableHeader1">
        <h2>Patient report</h2>
        <p>List of patient</p>
      </div>
      <div className="createNewRyderBtn">
        <button
          onClick={() => {
            openModal();
            setTab("tab1");
          }}
        >
          Create new patient
        </button>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p
            style={
              orderType == "all"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
          >
            All
          </p>
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
              <th>Last visit</th>
              <th>level</th>
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
                  customerID,
                  lastVisit,
                  level,
                  active,
                } = rider;
                return (
                  <tr key={id}>
                    <td>{`${customerID} `}</td>
                    <td>{moment(lastVisit).format("llll")}</td>
                    <td>{level}</td>
                    <td>
                      {active == true ? (
                        <div
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            background: "green",
                          }}
                        ></div>
                      ) : (
                        <div
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            background: "red",
                          }}
                        ></div>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>No data found</p>
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
            {tab === "tab1" ? (
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
                  <div className="riderInputWrapMain appInputWrap ">
                    <label htmlFor=""> Patient ID</label>
                    <select
                      onChange={(e) => {
                        setUserP({ ...userP, patientID: e.target.value });
                        console.log(userP);
                      }}
                      value={userP.patientID}
                    >
                      <option value="">Select</option>
                      <option value="higikaya">higikaya</option>
                      <option value="hachima">hachima</option>
                      <option value="shitachi">shitachi</option>
                    </select>
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
                    <label htmlFor=""> Doctor ID</label>
                    <select
                      onChange={(e) => {
                        setUserP({ ...userP, doctorID: e.target.value });
                        console.log(userP);
                      }}
                      value={userP.doctorID}
                    >
                      <option value="">Select</option>
                      <option value="yasemin">yasemin</option>
                    </select>
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
                    <label htmlFor=""> Nurse ID</label>
                    <select
                      onChange={(e) => {
                        setUserP({ ...userP, nurseID: e.target.value });
                        console.log(userP);
                      }}
                      value={userP.nurseID}
                    >
                      <option value="">Select</option>
                      <option value="suo">suo</option>
                    </select>
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
                    <label htmlFor=""> procedure ID</label>
                    <select
                      onChange={(e) => {
                        setUserP({ ...userP, procedure: e.target.value });
                        console.log(userP);
                      }}
                      value={userP.procedure}
                    >
                      <option value="">Select</option>
                      <option value="Checkup">Checkup</option>
                      <option value="surgery">surgery</option>
                    </select>
                  </div>

                  <div
                    className="riderInputWrapMain   appInputWrap"
                    style={{ width: "100%" }}
                  >
                    <label htmlFor=""> Due date</label>
                    <input
                      type="date"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setUserP({ ...userP, dueDate: e.target.value });
                        console.log(userP);
                      }}
                      value={userP.dueDate}
                    />
                  </div>

                  {/* <div className="riderInputWrapMain appInputWrap ">
                    <Input label="Middle name"  placeholder="Miracle" />
                  </div> */}

                  <div className="subRiderBtnWrap">
                    <Button
                      text="Cancel"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                    />
                    <Button
                      onClick={(e) => {
                        submitData(e);
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

            {tab === "tab2" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain appInputWrap ">
                    <Input
                      name="phoneNumber"
                      value={rider.phoneNumber}
                      onChange={onChange}
                      label="Phone number"
                      placeholder="08115659965"
                    />
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
                    <Input
                      name="email"
                      value={rider.email}
                      onChange={onChange}
                      label="Email"
                      placeholder="frostandy41@gmail.com"
                    />
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
                    <Select
                      name="country"
                      value={rider.country}
                      options={["Nigeria", "England"]}
                      defaultValue="Select Country"
                      label="Select Country"
                      onChange={onChange}
                    />
                  </div>
                  <div className="riderInputWrapMain appInputWrap ">
                    <Select
                      name="state"
                      value={rider.state}
                      options={["Lagos", "Abuja"]}
                      defaultValue="Select State"
                      label="Select State"
                      onChange={onChange}
                    />
                  </div>
                  <div className="riderInputWrapMain appInputWrap ">
                    <Select
                      name="lga"
                      value={rider.lga}
                      options={["Ikeja", "Surulere"]}
                      defaultValue="Select LGA"
                      label="Select LGA"
                      onChange={onChange}
                    />
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
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

            {tab === "tab3" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain appInputWrap ">
                    <Input
                      name="password"
                      value={rider.password}
                      onChange={onChange}
                      label="Password"
                      placeholder="********"
                      type="password"
                    />
                  </div>

                  <div className="riderInputWrapMain appInputWrap ">
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
                      onClick={submitData}
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

            {/* {tab==="tab4" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain appInputWrap ">
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
