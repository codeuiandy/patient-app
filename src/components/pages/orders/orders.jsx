import React, { useState } from "react";
import "./orders.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import "react-responsive-modal/styles.css";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import "../dashboard/dashboard.scss";
import { Modal } from "react-responsive-modal";
const Orders = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="tableHeader1">
        <h2>Orders</h2>
        <p>List of all orders made by users</p>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p>All</p>
          <p>On-going</p>
          <p>Scheduled</p>
          <p>Failed</p>
          <p>Completed</p>
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
              {/* <th>Action</th> */}
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
              <td>
                {" "}
                <img
                  onClick={onOpenModal}
                  style={{ width: "20px" }}
                  src={checkImg}
                  alt=""
                />
              </td>
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
              <td>
                <img
                  onClick={onOpenModal}
                  style={{ width: "20px" }}
                  src={checkImg}
                  alt=""
                />
              </td>
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
              <td>
                {" "}
                <img
                  onClick={onOpenModal}
                  style={{ width: "20px" }}
                  src={checkImg}
                  alt=""
                />
              </td>
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
              <td>
                {" "}
                <img
                  onClick={onOpenModal}
                  style={{ width: "20px" }}
                  src={checkImg}
                  alt=""
                />
              </td>
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
              <td>
                {" "}
                <img
                  onClick={onOpenModal}
                  style={{ width: "20px" }}
                  src={checkImg}
                  alt=""
                />
              </td>
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
        <div className="order-details-modal">
          <div className="rder-details-modalMain">
            <div className="order-details-modalCol1">
              <div className="orderStatus">
                <div className="orderStatusCol1">
                  <p>Status</p>
                  <p>Completed</p>
                </div>
                <div className="orderStatusCol2">
                  <p>Tracking ID</p>
                  <p>12323jerjker343</p>
                </div>
              </div>

              <div className="senderInfomdwe">
                <h2>Sender Info.</h2>
                <div className="senderInfoDetailsdf">
                  <div className="senderInfoDetailsdfImg">
                    <img src={userImg} alt="" />
                  </div>

                  <div className="senderInfoDetailsdfImgIngdf">
                    <p>Nelson Logistics</p>
                    <p>+234 9045 345 7865</p>
                  </div>
                </div>
              </div>

              <div className="senderInfomdwe">
                <h2>Reciever Info.</h2>
                <div className="senderInfoDetailsdf">
                  <div className="senderInfoDetailsdfImg">
                    <img src={userImg} alt="" />
                  </div>

                  <div className="senderInfoDetailsdfImgIngdf">
                    <p>Nelson Logistics</p>
                    <p>+234 9045 345 7865</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-details-modalCol2">
              <div className="order-details-modalCol2Header">
                <p></p>
                <p>Order info</p>
                <p>27/02/2021</p>
              </div>
              <div className="listcol2jduedqd">
                <div className="listcol2jduedqdCol1">
                  <p>Name</p>
                  <p>Jollof Rice</p>
                </div>
              </div>

              <div className="listcol2jduedqd">
                <div className="listcol2jduedqdCol1">
                  <p>Category</p>
                  <p>Food</p>
                </div>
              </div>

              <div className="listcol2jduedqd">
                <div className="listcol2jduedqdCol1">
                  <p>Weight</p>
                  <p>0 - 2kg</p>
                </div>
                <div className="listcol2jduedqdCol2">
                  {" "}
                  <p>Quantity</p>
                  <p>6</p>
                </div>
              </div>

              <div className="listcol2jduedqd">
                <div className="listcol2jduedqdCol1">
                  <p>Price per item</p>
                  <p>5000</p>
                </div>
              </div>

              <div className="listcol2jduedqd">
                <div className="listcol2jduedqdCol1">
                  <p>Media</p>
                  <img src={userImg} alt="" /> <img src={userImg} alt="" />{" "}
                  <img src={userImg} alt="" />
                </div>
              </div>
            </div>
            <div className="order-details-modalCol3">
              <div className="riderInfoModal">
                <h2 className="riderInfoModaImgPHeader">Rider Info</h2>
                <img className="riderInfoModaImgP" src={userImg} alt="" />
                <p>Okeke Andrew</p>
                <p className="riderInfoModalNum">+234 9038 234 3456</p>
                <div className="riderpriceModal">
                  <p>Delivery Price</p>
                  <p>3,500</p>
                </div>
              </div>
              <div className="ordertracajdl">
                <div className="ordertracajdlHeader">
                  <p>Pick Up</p>
                </div>

                <div className="dashboardnotTrack">
                  <div className="dashboardnotTrackMai">
                    <img src={tripStart} alt="" />
                    <p>Alausa round about, 1 mko, Ikeja, Lagos S..</p>
                  </div>
                  <div className="dashboardnsswotTrackColLine"></div>

                  <div className="ordertracajdlHeader">
                    <p>Drop off</p>
                  </div>
                  <div className="dashboardnotTrackMai">
                    <img src={locationIcon} alt="" />
                    <p>Alausa round about, 1 mko, Ikeja, Lagos S..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
