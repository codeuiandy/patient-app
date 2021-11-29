import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { LayoutContext } from "../../context/layoutContext";
import { SearchIconNavbr, BellIconNavbar } from "../../assets/images/svgs";
import { useLocation } from "react-router-dom";
//import GoBack from './../helpers/GoBack';
import searchIcon from "../../assets/imgF/Search.png";
import { HelpIcon } from "../../assets/SvgIconsSet.jsx";
import bellIcon from "../../assets/imgF/notifications_black_24dp@2x.png";
import settingsIcon from "../../assets/imgF/settings_black_24dp-2@2x.png";
export default function Navbar({
  browserRouter,
  routeType,
  fullProps,
  pageName,
}) {
  // let [initsidebarState, setinitsidebarState] = useContext(LayoutContext);
  const getLocalItem = "h";
  const router = useLocation();
  let [LoginUser, setLoginUser] = useState(false);
  let [navDrop, setnavDrop] = useState(false);
  let [userData, setUserData] = useState();
  const [currentPath, setCurrentPath] = useState(
    router.pathname.replace("/", "")
  );
  const [UserProfilePage, setUserProfilePage] = useState("Profile");
  const IsUserValidated = () => {
    // const lastUsedToken = localStorage.getItem("token");
    // if (
    //   lastUsedToken === null ||
    //   lastUsedToken === undefined ||
    //   lastUsedToken === ""
    // ) {
    //   setLoginUser(false);
    // } else {
    //   setLoginUser(true);
    //   let res = JSON.parse(getLocalItem("user"));
    //   setUserData(res);
    // }
  };
  let [useUserContextData, setUseUserContext] = useState(null);

  const { appReduceSidebarWidth } = useContext(LayoutContext);
  const [sp, setSp] = useState(window.pageYOffset);
  const [localUser, setlocalUser] = useState({});
  useEffect(() => {
    getUserFromStorage();
  }, []);

  const getUserFromStorage = () => {
    let lUser = localStorage.getItem("user");
    if (lUser == undefined || lUser == null) {
      return;
    } else {
      let parse = JSON.parse(lUser);
      console.log(parse);
      setlocalUser(parse.user);
    }
  };

  return (
    <React.Fragment>
      <div
        id="navbar"
        className={`${
          appReduceSidebarWidth === true
            ? "section-wrap-nav"
            : "section-wrap-nav section-wrap-navPadding"
        }`}
      >
        <div className="navbar-position">
          <div
            className="navbar-wrap"
            className={`${
              appReduceSidebarWidth === true
                ? "navbar-wrap"
                : "navbar-wrap section-wrap-navWidth"
            }`}
          >
            <div className="navbar-content">
              <div className="navbar-right-content align-items-center d-flex gap-3">
                <form>
                  <div>
                    <input
                      placeholder="Enter here to search the table"
                      type="text"
                      style={{
                        borderRadius: 3,
                        border: "none",
                        padding: "0.35rem 2rem",
                        backgroundImage: `url(${searchIcon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "14px",
                        backgroundPosition: "10px 50%",
                      }}
                      className="navbarSearchIcon"
                    />

                    <div>
                      <img
                        src={searchIcon}
                        alt=""
                        style={{
                          height: "10px",
                          width: "10px",
                          display: "none",
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="navbar-right-content align-items-center d-flex gap-3">
                <div className="navbarIcons">
                  <img src={bellIcon} alt="" />
                </div>

                <div className="navbarIcons">
                  <img src={settingsIcon} alt="" />
                </div>

                <div>
                  <img
                    src={localUser?.avatar}
                    alt=""
                    style={{
                      width: 30,
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
