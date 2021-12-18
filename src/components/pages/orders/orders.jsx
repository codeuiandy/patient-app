import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Select from "react-select";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import arrowL from "../../../assets/imgF/arrow_back_ios_new_black_24dp-2@2x.png";
import cancelImg from "../../../assets/imgF/cancel_black_24dp@2x.png";
import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import { httpGet, httpPost } from "../../../helpers/httpMethods";
import { Button } from "../../buttons";
import { hideLoader, showLoader } from "../../helpers/loader";
import "../dashboard/dashboard.scss";
import img from "./../../../assets/imgF/update_rider_success.png";
import "./../../modals/modal.scss";
import "./orders.css";
import moment from "moment";

const Orders = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [assignOrderToRiderSuccessModal, setAssignOrderToRiderSuccessModal] =
    useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [riders, setRider] = useState([]);
  const [orders, setOrders] = useState([]);
  const [singleOrder, setSingleOrder] = useState({});
  const [filterOrdersSt, setFilterOrders] = useState([]);
  const [selectedRider, setSelectedRider] = useState({
    orderId: "",
    riderId: "",
  });
  const [orderType, setOrderType] = useState("all");
  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);

  const toggleAssignOrderToRiderSuccessModal = () => {
    setAssignOrderToRiderSuccessModal(!assignOrderToRiderSuccessModal);
  };

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
      setFilterOrders(ordersRes.data);
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
      setOrderType("all");
      closeModal2();
      getRiderAndOrders();
      toggleAssignOrderToRiderSuccessModal();
    }
    console.log(response);
  };

  useEffect(() => {
    getRiderAndOrders();
  }, []);

  const filterOrders = (type) => {
    switch (type) {
      case "pending":
        let filterPendingOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filterPendingOrders);
        console.log(filterPendingOrders);
        break;

      case "paid":
        let filterpaidOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filterpaidOrders);
        console.log(filterpaidOrders);
        break;

      case "pickup":
        let filterpickupOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filterpickupOrders);
        console.log(filterpickupOrders);
        break;

      case "arrived":
        let filterarrivedOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filterarrivedOrders);
        console.log(filterarrivedOrders);
        break;

      case "delivered":
        let filterdeliveredOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filterdeliveredOrders);
        console.log(filterdeliveredOrders);
        break;

      case "cancelled":
        let filtercancelledOrders = orders.filter((data) => {
          return data.status == type;
        });
        setFilterOrders(filtercancelledOrders);
        console.log(filtercancelledOrders);
        break;

      default:
        setFilterOrders(orders);
        break;
    }
  };

  return (
    <div>
      <div className="tableHeader1">
        <h2>Orders</h2>
        <p>List of all orders made by users</p>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p
            style={
              orderType == "all"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("");
              setOrderType("all");
            }}
          >
            All
          </p>
          <p
            style={
              orderType == "pending"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("pending");
              setOrderType("pending");
            }}
          >
            Pending
          </p>
          <p
            style={
              orderType == "pickup"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("pickup");
              setOrderType("pickup");
            }}
          >
            Pickup
          </p>
          <p
            style={
              orderType == "arrived"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("arrived");
              setOrderType("arrived");
            }}
          >
            Arrived
          </p>
          <p
            style={
              orderType == "cancelled"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("cancelled");
              setOrderType("cancelled");
            }}
          >
            Cancelled
          </p>

          <p
            style={
              orderType == "paid"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("paid");
              setOrderType("paid");
            }}
          >
            Paid
          </p>

          <p
            style={
              orderType == "delivered"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterOrders("delivered");
              setOrderType("delivered");
            }}
          >
            Delivered
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
              <th>Item name</th>
              <th>Sender name</th>
              <th>Date</th>
              <th>Rider name</th>
              <th> Amount</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {filterOrdersSt.length == 0 ||
            filterOrdersSt === undefined ||
            filterOrdersSt === null ? (
              <p style={{ fontSize: "15px", width: "100%", marginTop: "30px" }}>
                No result found at the moment.
              </p>
            ) : (
              filterOrdersSt.map((data, index) => {
                return (
                  <tr key={index} class="active-row">
                    <td>{data?.itemName}</td>
                    <td>{data?.senderName}</td>
                    <td>{moment(data?.createdAt).format("DD-MM-YYYY")}</td>
                    <td>
                      {data.assigned == null
                        ? "Not assinged to a rider"
                        : `${data.assigned.rider.firstName} ${data.assigned.rider.lastName}`}
                    </td>
                    <td>{data.cost}</td>
                    <td
                      style={{ textTransform: "capitalize" }}
                      onClick={
                        data.assigned == null
                          ? () =>
                              NotificationManager.info(
                                "You need to assign a rider to continue"
                              )
                          : () => {
                              openModal1();
                              setSingleOrder(data);
                              console.log(data);
                            }
                      }
                    >
                      {" "}
                      {/* <img
                        onClick={openModal1}
                        style={{ width: "20px" }}
                        src={checkImg}
                        alt=""
                      /> */}
                      {data.status}
                    </td>{" "}
                    <td
                      onClick={
                        data.assigned == null
                          ? () => openModal2(data)
                          : () => {}
                      }
                    >
                      <button
                        style={
                          data.assigned == null
                            ? {
                                padding: "10px",
                                background: "#0087ff",
                                color: "white",
                                color: "white",
                                borderRadius: "5px",
                              }
                            : {
                                padding: "10px",
                                background: "rgba(128, 128, 128, 0.308)",
                                color: "white",
                                color: "white",
                                borderRadius: "5px",
                              }
                        }
                        onClick={
                          data.assigned == null
                            ? () => openModal2(data)
                            : () => {}
                        }
                      >
                        Pick Rider
                      </button>
                    </td>
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

      {showModal1 ? (
        <Modal open={showModal1} onClose={closeModal1} center>
          <div className="order-details-modal">
            <div className="order-details-modalMain">
              <div className="order-details-modalCol1">
                <div className="orderStatus">
                  <div className="orderStatusCol1">
                    <p>Status</p>
                    <p style={{ textTransform: "capitalize" }}>
                      {singleOrder.status}
                    </p>
                  </div>
                  <div className="orderStatusCol2">
                    <p>Tracking ID</p>
                    <p> {singleOrder.id.slice(0, 10)}</p>
                  </div>
                </div>

                <div className="senderInfomdwe">
                  <h2>Sender Info.</h2>
                  <div className="senderInfoDetailsdf">
                    <div className="senderInfoDetailsdfImg">
                      <img src={userImg} alt="" />
                    </div>

                    <div className="senderInfoDetailsdfImgIngdf">
                      <p>{singleOrder.senderName}</p>
                      <p>{singleOrder.senderPhone}</p>
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
                      <p>{singleOrder.receiverName}</p>
                      <p>{singleOrder.receiverPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-details-modalCol2">
                <div className="order-details-modalCol2Header">
                  <p></p>
                  <p>Order info</p>
                  <p>{moment(singleOrder.createdAt).format("DD-MM-YYYY")}</p>
                </div>
                <div className="listcol2jduedqd">
                  <div className="listcol2jduedqdCol1">
                    <p>Name</p>
                    <p>{singleOrder.itemName}</p>
                  </div>
                </div>

                <div className="listcol2jduedqd">
                  <div className="listcol2jduedqdCol1">
                    <p>Category</p>
                    <p>Goods</p>
                  </div>
                </div>

                <div className="listcol2jduedqd">
                  <div className="listcol2jduedqdCol1">
                    <p>Weight</p>
                    <p>{singleOrder.itemWeight}</p>
                  </div>
                  <div className="listcol2jduedqdCol2">
                    {" "}
                    <p>Quantity</p>
                    <p>{singleOrder.quantity}</p>
                  </div>
                </div>

                <div className="listcol2jduedqd">
                  <div className="listcol2jduedqdCol1">
                    <p>Price per item</p>
                    <p>₦{singleOrder.itemPrice}</p>
                  </div>
                </div>

                <div className="listcol2jduedqd">
                  {/* <div className="listcol2jduedqdCol1">
                  <p>Media</p>
                  <img src={userImg} alt="" /> <img src={userImg} alt="" />{" "}
                  <img src={userImg} alt="" />
                </div> */}
                </div>
              </div>
              <div className="order-details-modalCol3">
                <div className="riderInfoModal">
                  <h2 className="riderInfoModaImgPHeader">Rider Info</h2>
                  <img className="riderInfoModaImgP" src={userImg} alt="" />
                  <p>{`${singleOrder.assigned.rider.firstName} ${singleOrder.assigned.rider.lastName}`}</p>
                  <p className="riderInfoModalNum">
                    {singleOrder?.phoneNumber}
                  </p>
                  <div className="riderpriceModal">
                    <p>Delivery Price</p>
                    <p>₦{singleOrder.cost}</p>
                  </div>
                </div>
                <div className="ordertracajdl">
                  <div className="ordertracajdlHeader">
                    <p>Pick Up</p>
                  </div>

                  <div className="dashboardnotTrack">
                    <div className="dashboardnotTrackMai">
                      <img src={tripStart} alt="" />
                      <p>{singleOrder?.pickUpAddress.slice(0, 35)}</p>
                    </div>
                    <div className="dashboardnsswotTrackColLine"></div>

                    <div className="ordertracajdlHeader">
                      <p>Drop off</p>
                    </div>
                    <div className="dashboardnotTrackMai">
                      <img src={locationIcon} alt="" />
                      <p>{singleOrder.deliveryAddress.slice(0, 35)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}

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
              <Select
                value={selectedOption}
                placeholder="Enter rider name"
                onChange={handleSelect}
                options={riders}
              />
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

      <Modal
        open={assignOrderToRiderSuccessModal}
        onClose={toggleAssignOrderToRiderSuccessModal}
        center
      >
        <div className="modal-wrapper">
          <div className="modal-container">
            <section className="modal-info success ta-c">
              <h3 className="success__heading">
                Successfully assigned order to rider
              </h3>
              <p className="success__note">
                An email will be sent to update them
              </p>
              <div className="success__img--wrapper">
                <img
                  src={img}
                  alt="assign order to rider success"
                  className="success__img"
                />
              </div>
              {/* <Button
                width="100%"
                text="Create another rider"
                background="#0087ff",color:"white"
                fontSize="14px"
                color="white"
              /> */}
              <Button
                width="100%"
                text="Go Back"
                background="#61696F26"
                fontSize="14px"
                color="#00101d"
                onClick={toggleAssignOrderToRiderSuccessModal}
              />
            </section>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
