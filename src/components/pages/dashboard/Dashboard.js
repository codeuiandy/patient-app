import { useEffect, useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
import { NotificationManager } from "react-notifications";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import {
  default as codeuiandy,
  default as userImg,
} from "../../../assets/imgF/codeuiandyimg.png";
import FilterImg from "../../../assets/imgF/filter_list_black_24dp@2x.png";
import clock from "../../../assets/imgF/notifications_active_black_24dp@2x.png";
import walletImg from "../../../assets/imgF/payments_black_24dp@2x.png";
import clipBoardImg from "../../../assets/imgF/pending_actions_black_24dp@2x.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import { httpGet } from "./../../../helpers/httpMethods";
import { hideLoader, showLoader } from "./../../helpers/loader";
import "./../orders/orders.css";
import "./dashboard.scss";

const DashboardTwo = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [stats, setStats] = useState({});
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  const toggleModal1 = () => setShowModal1(!showModal1);

  useEffect(() => {
    (async () => {
      showLoader();
      const response = await httpGet(`admin/orders?status=delivered`);
      hideLoader();
      console.log("RESPONSE>>>", response);
      if (!response?.success) {
        return NotificationManager.error(response.message);
      }
      if (response.code === 200) {
        setStats(response.data);
      }
      console.log(response);
    })();

    (async () => {
      showLoader();
      const response = await httpGet(`admin/recent/orders`);
      hideLoader();
      console.log("RESPONSE>>>", response);
      if (!response?.success) {
        return NotificationManager.error(response.message);
      }
      if (response.code === 200) {
        setDeliveredOrders(response.data);
      }
      console.log(response);
    })();
  }, []);

  return (
    <div className="dashboard-main">
      <div className="dashboardCo1">
        <div className="dashboardHeading">
          <h2>Welcome Andrew,</h2>
          <p>here is an overview on E-Rider</p>
        </div>

        <div className="lastUpdatedDashbordCon">
          <p>
            <FaRedoAlt style={{ marginRight: "5px" }} />
            Last updated 12:45 PM
          </p>
          <select>
            <option value="Today">Today</option>
          </select>
        </div>

        <div className="dashboardCards">
          <div className="dashboardCardsMain">
            <h2>{stats?.pendingOrder || 0}</h2>
            <p>
              <img src={clipBoardImg} alt="" /> Scheduled Deliveries
            </p>
          </div>

          <div className="dashboardCardsMain skdypdashb">
            <h2>{stats?.completedOrder || 0}</h2>
            <p>
              <img src={checkImg} alt="" /> Completed Deliveries
            </p>
          </div>

          <div className="dashboardCardsMain">
            <h2>
              {stats?.profit || 0} <span>10%</span>
            </h2>
            <p>
              <img src={walletImg} alt="" /> Profit
            </p>
          </div>
        </div>

        <div
          className="dashboardHeadingnn"
          style={{ marginTop: "30px", marginBottom: "0" }}
        >
          <h2>On going deliveries</h2>
          <p>Recent Orders</p>
        </div>

        <div
          style={{
            height: "400px",
            overflow: "hidden",
            overflowY: "scroll",
            marginBottom: "30px",
          }}
        >
          <table class="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Item name</th>
                <th>Amount (N)</th>
              </tr>
            </thead>
            <tbody>
              {deliveredOrders.length ? (
                deliveredOrders.slice(0, 10).map((order) => {
                  return (
                    <tr key={order?.id} className="active-row">
                      <td>
                        <img
                          class="userProfileImg"
                          src={order?.avatar || codeuiandy}
                          alt=""
                        />{" "}
                        {`${order?.firstName || "Chuka"} ${
                          order?.lastName || "Nduka"
                        }`}
                      </td>
                      <td>{order?.itemName}</td>
                      <td>{order?.cost}</td>
                    </tr>
                  );
                })
              ) : (
                <p>No delivered orders</p>
              )}
            </tbody>
          </table>
        </div>

        <div className="viewAllOngoingVdendor">
          <Link to={`orders`}>
            <button>View all orders</button>
          </Link>
        </div>
      </div>
      <div className="dashboardCo2">
        <div className="dashboardCo2Header">
          <div className="dashboardCo2HeaderCol1">
            <h2>Scheduled Delivery</h2>
            <p>The deliveries to be made</p>
          </div>
          <div className="dashboardCo2HeaderCol2">
            <img src={FilterImg} alt="" />
          </div>
        </div>
        <div className="notdatesjhd">
          <p className="notdatesjhdHeader">
            <img src={clock} alt="" /> Today
          </p>
        </div>

        {deliveredOrders.length ? (
          deliveredOrders.slice(0, 4).map((order) => {
            return (
              <div
                className="notifcardDashboard"
                key={order?.id}
                onClick={toggleModal1}
              >
                <div className="notifcardDashboardHeader">
                  <p>{order?.itemName}</p>
                  <img src={checkImg} alt="" />
                </div>

                <div className="dashboardnotTrack">
                  <div className="dashboardnotTrackCol">
                    <img src={tripStart} alt="" />
                    <p>{order?.senderAddress}</p>
                  </div>
                  <div className="dashboardnotTrackColLine"></div>
                  <div className="dashboardnotTrackCol">
                    <img src={locationIcon} alt="" />
                    <p>{order?.receiverAddress}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data found</p>
        )}

        {/* <div className="notdatesjhd" style={{ marginTop: "50px" }}>
          <p className="notdatesjhdHeader">
            <img src={clock} alt="" /> Tomorrow
          </p>
        </div> */}

        {/* <div className="notifcardDashboard">
          <div className="notifcardDashboardHeader">
            <p>Item Name</p>
            <img src={checkImg} alt="" />
          </div>

          <div className="dashboardnotTrack">
            <div className="dashboardnotTrackCol">
              <img src={tripStart} alt="" />
              <p>Alausa round about, 1 mko, Ikeja, Lagos S..</p>
            </div>
            <div className="dashboardnotTrackColLine"></div>
            <div className="dashboardnotTrackCol">
              <img src={locationIcon} alt="" />
              <p>Alausa round about, 1 mko, Ikeja, Lagos S..</p>
            </div>
          </div>
        </div> */}
        <div className="showAllSchdDashboard">
          <Link to={`orders`}>
            <button>View all orders</button>
          </Link>
        </div>
      </div>

      <Modal open={showModal1} onClose={toggleModal1} center>
        <div className="order-details-modal">
          <div className="order-details-modalMain">
            <div className="order-details-modalCol1">
              <div className="orderStatus">
                <div className="orderStatusCol1">
                  <p>Status</p>
                  <p>Completed</p>
                </div>
                <div className="orderStatubsCol2">
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

export default DashboardTwo;
