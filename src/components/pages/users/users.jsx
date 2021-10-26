import React, { useState } from "react";
import "./orders.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import check from "../../../assets/imgF/check_circle_black_24dp@2x.png";

import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import cancelIcon from "../../../assets/imgF/cancel_black_24dp@2x.png";
import { Modal } from "react-responsive-modal";
const Orders = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="tableHeader1">
        <h2>Users</h2>
        <p>List of users</p>
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
              <td onClick={onOpenModal}>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>27/03/2021</td>
              <td onClick={onOpenModal}>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Okeke
                Andrew
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
        <div className="viewUserModalWrap">
          <div className="modalHeader">
            <p>User Info</p>{" "}
            <img
              onClick={onCloseModal}
              style={{ cursor: "pointer" }}
              src={cancelIcon}
              alt=""
            />
          </div>

          <div className="viewUserModalInfod">
            <div className="viewUserModalInfodCol1">
              <div className="userImgwrapViwp">
                <img src={userImg} alt="" />
              </div>
              <p>Okeke Andrew</p>
              <p className="viewUserModalInfodCol1Status">
                <span>Status </span> <span>Active</span>
              </p>
              <button>Deactivate user</button>
            </div>
            <div className="viewUserModalInfodCol2">
              <div className="userDetailsCol2">
                <p>Phone number</p>
                <p>+234 9045 345 7865</p>
              </div>

              <div className="userDetailsCol2">
                <p>Email address</p>
                <p>frostandy41@gmail.com</p>
              </div>

              <div className="userDetailsCol2">
                <p>Country</p>
                <p>Nigeria</p>
              </div>

              <div className="userDetailsCol2">
                <p>State</p>
                <p>Lagos</p>
              </div>

              <div className="userDetailsCol2">
                <p>Address</p>
                <p>Off Alausa, Obafemi awolowo road</p>
              </div>

              <div className="userDetailsCol2 ">
                <p>Order created</p>
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
