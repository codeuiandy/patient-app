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
import UpdatedRefundReciept from "../../modals/UpdatedRefundReciept";
import ChangedBikeRider from "../../modals/ChangedBikeRider";
import AddedNewBike from "../../modals/AddedNewBike";
import CreatedDiscount from "../../modals/CreatedDiscount";
import UpdatePassword from "../../modals/UpdatePassword";

const DashboardTwo = () => {
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
            <h2>18</h2>
            <p>
              <img src={clipBoardImg} alt="" /> Scheduled Deliveries
            </p>
          </div>

          <div className="dashboardCardsMain skdypdashb">
            <h2>100</h2>
            <p>
              <img src={checkImg} alt="" /> Completed Deliveries
            </p>
          </div>

          <div className="dashboardCardsMain">
            <h2>
              N50K <span>10%</span>
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
          <h2>On going delivery</h2>
          <p>Orders currently delivered</p>
        </div>

        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Item name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>6000</td>
            </tr>
            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>5150</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>5150</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>5150</td>
            </tr>

            <tr class="active-row">
              <td>
                {" "}
                <img class="userProfileImg" src={codeuiandy} alt="" /> Chuka
                Nduka
              </td>
              <td>Italian Bag</td>
              <td>5150</td>
            </tr>
          </tbody>
        </table>

        <div className="viewAllOngoingVdendor">
          <button>View all on going delivery</button>
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

        <div className="notifcardDashboard">
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
        </div>

        <div className="notifcardDashboard">
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
        </div>

        <div className="notdatesjhd" style={{ marginTop: "50px" }}>
          <p className="notdatesjhdHeader">
            <img src={clock} alt="" /> Tomorrow
          </p>
        </div>

        <div className="notifcardDashboard">
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
        </div>
        <div className="showAllSchdDashboard">
          <button>See all scheduled orders</button>
        </div>
      </div>
      <UpdatedProfileModal />
      <CreatedNewRider />
      <AddNewBike />
      <UpdatedRefundReciept />
      <ChangedBikeRider />
      <AddedNewBike />
      <CreatedDiscount />
      <UpdatePassword />
    </div>
  );
};

export default DashboardTwo;
