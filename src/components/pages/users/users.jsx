import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { Modal } from "react-responsive-modal";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import cancelIcon from "../../../assets/imgF/cancel_black_24dp@2x.png";
import check from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import {
  default as codeuiandy,
  default as userImg,
} from "../../../assets/imgF/codeuiandyimg.png";
import greenEllipse from "./../../../assets/imgF/green_ellipse.png";
import redEllipse from "./../../../assets/imgF/red_ellipse.png";
import { httpGet } from "./../../../helpers/httpMethods";
import { hideLoader, showLoader } from "./../../helpers/loader";
import "./users.css";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [filterUsersSt, setFilterUsers] = useState([]);
  const [orderType, setOrderType] = useState("all");
  console.log(users);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getSingleUser = async (id) => {
    const response = await httpGet(`admin/single/user/${id}`);
    console.log("RESPONSE>>>", response);
    if (!response?.success) {
      return NotificationManager.error(response.message);
    }
    if (response.code === 200) {
      setUser(response.data);
    }
    console.log(response);
  };

  useEffect(() => {
    (async () => {
      showLoader();
      const response = await httpGet(`admin/all_users?type=user`);
      hideLoader();
      console.log("RESPONSE>>>", response);
      if (!response?.success) {
        return NotificationManager.error(response.message);
      }
      if (response.code === 200) {
        setUsers(response.data);
        setFilterUsers(response.data);
      }
      console.log(response);
    })();
  }, []);

  const filterusers = (type) => {
    switch (type) {
      case "active":
        let filteractiveusers = users.filter((data) => {
          return data.status == type;
        });
        setFilterUsers(filteractiveusers);
        console.log(filteractiveusers);
        break;

      case "inactive":
        let filterinactiveusers = users.filter((data) => {
          return data.status == type;
        });
        setFilterUsers(filterinactiveusers);
        console.log(filterinactiveusers);
        break;

      case "unverified":
        let filterunverifiedusers = users.filter((data) => {
          return data.status == type;
        });
        setFilterUsers(filterunverifiedusers);
        console.log(filterunverifiedusers);
        break;

      case "suspended":
        let filtersuspendedusers = users.filter((data) => {
          return data.status == type;
        });
        setFilterUsers(filtersuspendedusers);
        console.log(filtersuspendedusers);
        break;

      case "deleted":
        let filterdeletedusers = users.filter((data) => {
          return data.status == type;
        });
        setFilterUsers(filterdeletedusers);
        console.log(filterdeletedusers);
        break;

      default:
        setFilterUsers(users);
        break;
    }
  };

  return (
    <div>
      <div className="tableHeader1">
        <h2>Users</h2>
        <p>List of users</p>
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
              filterusers("");
              setOrderType("all");
            }}
          >
            All
          </p>

          <p
            style={
              orderType == "active"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterusers("active");
              setOrderType("active");
            }}
          >
            Active
          </p>
          <p
            style={
              orderType == "inactive"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterusers("inactive");
              setOrderType("inactive");
            }}
          >
            Inactive
          </p>
          <p
            style={
              orderType == "unverified"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterusers("unverified");
              setOrderType("unverified");
            }}
          >
            Unverified
          </p>
          <p
            style={
              orderType == "suspended"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterusers("suspended");
              setOrderType("suspended");
            }}
          >
            Suspended
          </p>

          <p
            style={
              orderType == "deleted"
                ? { background: "#0087ff", color: "white" }
                : { background: "" }
            }
            onClick={() => {
              filterusers("deleted");
              setOrderType("deleted");
            }}
          >
            Deleted
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
              <th>Phone number</th>
              <th>Email</th>
              <th>Orders</th>
              <th>Status</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {filterUsersSt.length ? (
              filterUsersSt.map((user) => {
                const {
                  id,
                  avatar,
                  firstName,
                  lastName,
                  phoneNumber,
                  email,
                  status,
                  countryCode,
                } = user;
                return (
                  <tr key={id} onClick={() => getSingleUser(id)}>
                    <td>
                      <img
                        class="userProfileImg"
                        src={avatar || codeuiandy}
                        alt=""
                      />
                      {`${firstName} ${lastName}`}
                    </td>
                    <td>{`${countryCode} ${phoneNumber}`}</td>
                    <td>{email}</td>
                    <td>{`50`}</td>
                    <td onClick={onOpenModal}>
                      <img
                        src={status === "active" ? greenEllipse : redEllipse}
                        alt="online status"
                        className="user--isOnline img--ellipse"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>No user found</p>
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
                <img src={user?.avatar || userImg} alt="" />
              </div>
              <p> {`${user.firstName} ${user.lastName}` || "Okeke Andrew"}</p>
              <p className="viewUserModalInfodCol1Status">
                <span>Status </span>{" "}
                <span
                  className={`${
                    user.status === "active" ? "active" : "inActive"
                  }`}
                >
                  {user.status === "active" ? "Active" : "Deactivated"}
                </span>
              </p>
              <button
                className={`${
                  user.status === "active" ? "deActivate" : "activate"
                }`}
              >
                {user.status === "active" ? "Deactivate user" : "Activate user"}
              </button>
            </div>
            <div className="viewUserModalInfodCol2">
              <div className="userDetailsCol2">
                <p>Phone number</p>
                <p>
                  {`${user.countryCode} ${user.phoneNumber}` ||
                    "+234 9045 345 7865"}
                </p>
              </div>

              <div className="userDetailsCol2">
                <p>Email address</p>
                <p>{user.email || "frostandy41@gmail.com"}</p>
              </div>

              <div className="userDetailsCol2">
                <p>Country</p>
                <p>{user.country || "Nigeria"}</p>
              </div>

              <div className="userDetailsCol2">
                <p>State</p>
                <p>{user.state || "Lagos"}</p>
              </div>

              <div className="userDetailsCol2">
                <p>Address</p>
                <p>{user.address || "Off Alausa, Obafemi awolowo road"}</p>
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
