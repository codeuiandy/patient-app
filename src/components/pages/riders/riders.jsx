import React from "react";
import "./orders.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
const Orders = () => {
  return (
    <div>
      <div className="tableHeader1">
        <h2>Riders</h2>
        <p>List of riders</p>
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
    </div>
  );
};

export default Orders;
