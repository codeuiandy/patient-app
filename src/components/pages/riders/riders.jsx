import React from "react";
import "./orders.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import Modal from "react-responsive-modal";
import pen from "../../../assets/imgF/pen.png";
import Image from "../../../assets/getImageUrl";
import { Input, Select } from "../../input/Input";
import { Button } from "../../buttons/index";
const Orders = () => {
  const [open, setOpen] = React.useState(true);
  const [tab, setTab] = React.useState("tab1");
  const handleTabSwitch = (index) => {
    if (index == "tab1") {
      setTab("tab2");
    }

    if (index == "tab2") {
      setTab("tab3");
    }

    if (index == "tab3") {
      setTab("tab4");
    }

    if (index == "tab4") {
      setTab("tab4");
    }
  };
  const onCloseModal = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="tableHeader1">
        <h2>Riders</h2>
        <p>List of riders</p>
      </div>
      <div className="createNewRyderBtn">
        <button>Create new rider</button>
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
              <th>Sender name info</th>
              <th>Item name</th>
              <th>Date</th>
              <th>Rider name</th>
              <th>Delivery amount</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>3,500</td>
            </tr>
            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>3,500</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>3,500</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>3,500</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>3,500</td>
            </tr>
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

      <Modal open={open} onClose={onCloseModal} center>
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
                <li className={`${tab == "tab4" ? "activeBTab" : ""}`}>
                  <div
                    className="tabPositionRider"
                    style={tab == "tab4" ? { background: "orange" } : {}}
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Assign a bike</span>
                </li>
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

                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input label="First name" placeholder="Andrew" />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input label="Last name" placeholder="Okeke" />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input label="Middle name" placeholder="Miracle" />
                  </div>

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
                        handleTabSwitch("tab1");
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
                    <Input label="Phone number" placeholder="08115659965" />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input label="Email" placeholder="frostandy41@gmail.com" />
                  </div>

                  <div className="riderInputWrapMain">
                    <Select
                      options={[]}
                      defaultValue="Select Country"
                      label="Select Country"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input label="Address" placeholder="Lagos street" />
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

            {tab == "tab3" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input
                      label="Password"
                      placeholder="********"
                      type="password"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      label="Confirm password"
                      placeholder="********"
                      type="password"
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
                      onClick={() => {
                        handleTabSwitch("tab4");
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

            {tab == "tab4" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Select
                      options={[]}
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
                      onClick={() => {
                        handleTabSwitch("tab2");
                      }}
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
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
