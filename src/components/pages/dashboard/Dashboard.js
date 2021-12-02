import "./dashboard.scss";
import { FaRedoAlt } from "react-icons/fa";
import clipBoardImg from "../../../assets/imgF/pending_actions_black_24dp@2x.png";
import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import walletImg from "../../../assets/imgF/payments_black_24dp@2x.png";
import FilterImg from "../../../assets/imgF/filter_list_black_24dp@2x.png";
import clock from "../../../assets/imgF/notifications_active_black_24dp@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import UpdatedProfileModal from "../../modals/UpdatedProfileModal";
import CreatedNewRider from "../../modals/CreatedNewRider";
import AddNewBike from "../../modals/AddNewBike";
import UpdatedRefundReceipt from "../../modals/UpdatedRefundReceipt";
import ChangedBikeRider from "../../modals/ChangedBikeRider";
import AddedNewBike from "../../modals/AddedNewBike";
import CreatedDiscount from "../../modals/CreatedDiscount";
import UpdatePassword from "../../modals/UpdatePassword";
import UpdatedPassword from "./../../modals/UpdatedPassword";
import UpdatedAdminProfile from "./../../modals/UpdatedAdminProfile";
import ActivateUser from "../../modals/ActivateUser";
import { useEffect, useState } from "react";
import { httpPost, httpGet } from "./../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "./../../helpers/loader";
import { Link, useHistory } from "react-router-dom";

const DashboardTwo = () => {
  const [stats, setStats] = useState({});
  const [deliveredOrders, setDeliveredOrders] = useState([]);

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

        <div style={{height:"400px",overflow:"hidden",overflowY:"scroll",marginBottom:"30px"}}>



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
              deliveredOrders.slice(0,10).map((order) => {
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
          deliveredOrders.slice(0,4).map((order) => {
            return (
              <div className="notifcardDashboard" key={order?.id}>
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
      <AddNewBike />
      <AddedNewBike />
      <ChangedBikeRider />
      <CreatedDiscount />
      <CreatedNewRider />
      <UpdatePassword />
      <UpdatedAdminProfile />
      <UpdatedPassword />
      <UpdatedProfileModal />
      <UpdatedRefundReceipt />
      <ActivateUser />
    </div>
  );
};

export default DashboardTwo;
