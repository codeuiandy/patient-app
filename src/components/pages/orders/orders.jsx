import React, { useState, useEffect } from "react";
import "./orders.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import arrowL from "../../../assets/imgF/arrow_back_ios_new_black_24dp-2@2x.png";
import "react-responsive-modal/styles.css";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import cancelImg from "../../../assets/imgF/cancel_black_24dp@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import "../dashboard/dashboard.scss";
import { Modal } from "react-responsive-modal";
import { Button } from "../../buttons";
import Select from "react-select";
import { hideLoader, showLoader } from "../../helpers/loader";
import { httpGet, httpPost } from "../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import moment from "moment";
import { swal } from "sweetalert";

const Orders = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [riders, setRider] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedRider, setSelectedRider] = useState({
    orderId: "",
    riderId: "",
  });
  useEffect(() => {
    getRiderAndOrders();
  }, []);
  console.log(selectedOption);

  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);

  const openModal2 = (data) => {
    console.log(data);
    setSelectedRider({ ...selectedRider, orderId: data.id });
    setShowModal2(true);
  };
  const closeModal2 = () => setShowModal2(false);

  const handleSelect = (option) => {
    // console.log(`Option selected:`, option);
    setSelectedOption(option);
    setSelectedRider({ ...selectedRider, riderId: option.value });
  };

  const getRiderAndOrders = async () => {
    showLoader();
    const riderRes = await httpGet(`admin/all_users?type=rider`);
    const ordersRes = await httpGet(`admin/orders?status=all`);
    hideLoader();
    console.log("riderRes>>>", riderRes);
    if (ordersRes?.success == false || riderRes?.success == false) {
      return NotificationManager.error(riderRes.message);
    }
    if (riderRes.code === 200 && ordersRes.code == 200) {
      const transformed = riderRes.data.map(({ id, firstName, lastName }) => ({
        label: `${firstName} ${lastName}`,
        value: id,
      }));
      // alert("Got here");
      setRider(transformed);
      setOrders(ordersRes.data);
      console.log(ordersRes);
    }
    console.log(riderRes);
  };

  const assignOrderToRyder = async () => {
    if (selectedRider.riderId == "") {
      return NotificationManager.error("Please select a rider");
    }
    showLoader();
    const response = await httpPost(`admin/assign_order`, selectedRider);
    hideLoader();
    console.log("RESPONSE>>>", response);
    if (!response?.success) {
      return NotificationManager.error(response.message);
    }
    if (response.code === 200) {
      closeModal2();
      getRiderAndOrders();
      swal("success", "Order assinged successfully");
    }
    console.log(response);
  };

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
              <th>Item name</th>
              <th>Sender name</th>
              <th>Date</th>
              <th>Rider name</th>
              <th>Delivery amount</th>
              <th>Assign</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 || orders === undefined ? (
              <p style={{ fontSize: "18px", width: "100%", marginTop: "30px" }}>
                No order found at the moment
              </p>
            ) : (
              orders.map((data) => {
                return (
                  <tr class="active-row">
                    <td>{data?.itemName}</td>
                    <td>{data?.senderName}</td>
                    <td>{moment(data?.createdAt).format("DD-MM-YYYY")}</td>
                    <td>Chuka Nduka</td>
                    <td>3,500</td>
                    <td>
                      {" "}
                      <img
                        onClick={openModal1}
                        style={{ width: "20px" }}
                        src={checkImg}
                        alt=""
                      />
                    </td>{" "}
                    <td onClick={() => openModal2(data)}>Pick Rider</td>
                  </tr>
                );
              })
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

      <Modal open={showModal1} onClose={closeModal1} center>
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

      <Modal open={showModal2} onClose={closeModal2} center>
        <div className="assign-rider__modal-wrapper">
          <section className="assign-rider__modal">
            <header className="assign-rider__header">
              <div className="assign-rider__icon assign-rider__icon--back">
                <img src={arrowL} alt="" className="img--ellipse" />
              </div>
              <h2 className="assign-rider__heading">Change rider</h2>
              <div className="assign-rider__icon assign-rider__icon--cancel">
                <img
                  src={cancelImg}
                  onClick={closeModal2}
                  alt=""
                  className="img--ellipse"
                />
              </div>
            </header>
            <p className="assign-rider__text">Rider</p>
            <div className="assign-rider__select">
              {/* <Select
                value={selectedOption}
                placeholder="Enter rider name"
                onChange={handleSelect}
                options={riders}
              /> */}
            </div>
            <div className="assign-rider__cta">
              <Button
                width="100%"
                text="Cancel"
                background="#61696F26"
                fontSize="14px"
                color="#00101d"
              />

              <Button
                width="100%"
                text="Assign"
                background="#FFAF21"
                fontSize="14px"
                color="white"
                disabled={selectedRider.riderId == "" ? true : false}
                onClick={assignOrderToRyder}
              />
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
