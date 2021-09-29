import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { LayoutContext } from "../../context/layoutContext";
import { AuthContext } from "../../context/authContext";
import { NotificationManager } from "react-notifications";
import {
  appLogo,
  toggleIcon,
  dashboardIcon,
  HomeIcon,
  ClockIcon,
  CardIcon,
  MoreIcon,
  LogoutIconIcon,
  Graph,
  SettingsIcon,
  AppLogo,
} from "../../assets/images/svgs";
import reciptImg from "../../assets/imgF/receipt_long_black_24dp@2x.png";
import reciptImgActive from "../../assets/imgF/receipt_long_black_24dp-2@2x.png";
import personImgIcon from "../../assets/imgF/person_black_24dp-2@2x.png";
import dashboardImgIcon from "../../assets/imgF/dashboard_black_24dp@2x.png";
import ridersImgIcon from "../../assets/imgF/sports_motorsports_black_24dp@2x.png";
import paymentImgIcon from "../../assets/imgF/payments_black_24dp@2x.png";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import UserImg from "../../assets/imgF/codeuiandyimg.png";
export default function Sidebar({ browserRouter, currentRoute }) {
  const {
    setreduceSidebarWidth,
    appReduceSidebarWidth,
    reduceSidebarWidth,
  } = useContext(LayoutContext);

  const [PublicationShow, SetPublicationShow] = useState(true);
  const [CategoriesShow, SetCategoriesShow] = useState(false);
  const [SortShow, SetSortShow] = useState(false);
  const [DateShow, SetDateShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [PublicationsFilter, SetPublicationsFilter] = useState({
    all: true,
    newsPaper: false,
    magazine: false,
    books: false,
  });

  const [SortFilter, SetSortFilter] = useState({
    popular: true,
    recent: false,
  });

  const Logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to logout from the E-Ride service!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006298",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        NotificationManager.success("Logout Successfully.");
        window.location.href = "/";
      }
    });
  };
  return (
    <div>
      <div
        className={`${
          appReduceSidebarWidth === true
            ? "sidebar-wrap"
            : "sidebar-wrap reduceSidebarWidth"
        }`}
        style={
          appReduceSidebarWidth == true
            ? {
                alignItems: "center",
              }
            : {}
        }
      >
        <ul
          style={
            appReduceSidebarWidth == true
              ? {
                  paddingBottom: "60px",
                  paddingLeft: "0",
                }
              : { paddingBottom: "60px" }
          }
          className="sidebar-list"
        >
          <li>
            <div className="loginUserSidebarImg">
              <img
                style={
                  appReduceSidebarWidth == true
                    ? { marginBottom: "10px" }
                    : {
                        width: "35px",
                        height: "35px",
                        marginRight: "12px",
                        marginBottom: "-5px",
                      }
                }
                src={UserImg}
                alt=""
              />
            </div>
          </li>

          <li
            onClick={() => reduceSidebarWidth()}
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            style={{ color: "#00101D" }}
          >
            {" "}
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              <MenuIcon style={{ color: "#00101D" }} />
            </span>
            Menu
          </li>

          <li
            style={
              currentRoute === "/home" || currentRoute === "/home/tabs"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            // onClick={() => browserRouter("/home")}
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            onClick={() => browserRouter(`/home`)}
          >
            {" "}
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              {currentRoute !== "/orders" ? (
                <img className="sidebarImgIcon" src={dashboardImgIcon} alt="" />
              ) : (
                <img className="sidebarImgIcon" src={dashboardImgIcon} alt="" />
              )}
            </span>
            Dashboard
          </li>

          <li
            style={
              currentRoute === "/user_transations"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            onClick={() => browserRouter(`/orders`)}
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
          >
            {" "}
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              {currentRoute !== "/orders" ? (
                <img className="sidebarImgIcon" src={reciptImg} alt="" />
              ) : (
                <img className="sidebarImgIcon" src={reciptImgActive} alt="" />
              )}
            </span>
            Orders
          </li>

          <li
            style={
              currentRoute === "/user_cards"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            // onClick={() => browserRouter("/user_cards")}
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            onClick={() => browserRouter(`/users`)}
          >
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              {currentRoute !== "/orders" ? (
                <img className="sidebarImgIcon" src={personImgIcon} alt="" />
              ) : (
                <img className="sidebarImgIcon" src={personImgIcon} alt="" />
              )}
            </span>
            Users
          </li>

          <li
            style={
              currentRoute === "/more"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            onClick={() => browserRouter(`/riders`)}
          >
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              {currentRoute !== "/orders" ? (
                <img className="sidebarImgIcon" src={ridersImgIcon} alt="" />
              ) : (
                <img className="sidebarImgIcon" src={ridersImgIcon} alt="" />
              )}
            </span>
            Riders
          </li>

          <li
            style={
              currentRoute === "/more"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            onClick={() => browserRouter(`/payments`)}
          >
            {" "}
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              {currentRoute !== "/orders" ? (
                <img className="sidebarImgIcon" src={paymentImgIcon} alt="" />
              ) : (
                <img className="sidebarImgIcon" src={paymentImgIcon} alt="" />
              )}
            </span>
            Payments
          </li>
        </ul>
        <ul className="sidebar-list">
          <li
            style={
              currentRoute === "/more"
                ? { color: "#e3b451" }
                : { color: "#00101D" }
            }
            className={`${
              appReduceSidebarWidth === true ? "" : "moveAppLinksToCenter"
            }`}
            onClick={() => Logout()}
          >
            {" "}
            <span style={{ marginRight: "20px", marginTop: "-4px" }}>
              <ExitToAppIcon style={{ color: "#00101D" }} />
            </span>
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
