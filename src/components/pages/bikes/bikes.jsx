import React, { useState, useEffect } from "react";
import "./bikes.css";
import "./../../modals/modal.scss";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import arrowL from "../../../assets/imgF/arrow_back_ios_new_black_24dp-2@2x.png";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import userImg from "../../../assets/imgF/codeuiandyimg.png";
import img from "../../../assets/imgF/update_rider_success.png";

import checkImg from "../../../assets/imgF/check_circle_black_24dp@2x.png";
import cancelImg from "../../../assets/imgF/cancel_black_24dp@2x.png";
import tripStart from "../../../assets/imgF/trip_origin_black_24dp@2x.png";
import locationIcon from "../../../assets/imgF/place_black_24dp-2@2x.png";
import Modal from "react-responsive-modal";
import pen from "../../../assets/imgF/pen.png";
import Image from "../../../assets/getImageUrl";
import { Input } from "../../input/Input";
import { Button } from "../../buttons/index";
import ValidatePassword from "../../helpers/validatePassword";
import EmailAuth from "../../helpers/emailAuth";
import { httpGet, httpPost } from "../../../helpers/httpMethods";
import { NotificationManager } from "react-notifications";
import { hideLoader, showLoader } from "../../helpers/loader";
import { useHistory } from "react-router-dom";
import redEllipse from "./../../../assets/imgF/red_ellipse.png";
import greenEllipse from "./../../../assets/imgF/green_ellipse.png";
import swal from "sweetalert";
import Select from "react-select";

const Bikes = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [tab, setTab] = useState("tab1");
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState({
    riderId: "",
  });
  const [bike, setBike] = useState({
    brand: "",
    license: "",
  });
  const [bikes, setBikes] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const history = useHistory();

  const handleTabSwitch = (index) => {
    setTab(index);
  };

  const openModal1 = () => setShowModal1(true);
  const closeModal1 = () => setShowModal1(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openModal2 = (data) => {
    setShowModal2(true);
    console.log(data);
    setSelectedRider({ ...selectedRider, bikeId: data.id });
  };
  const closeModal2 = () => setShowModal2(false);

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setBike({ ...bike, [name]: value });
  };

  const handleSelect = (option) => {
    console.log(`Option selected:`, option);
    setSelectedOption(option);
    setSelectedRider({ ...selectedRider, riderId: option.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(bike);

    // const data = {};

    if (!bike) {
      return;
    } else {
      closeModal1();
      showLoader();
      const response = await httpPost(`bike/create`, bike);
      hideLoader();
      console.log("RESPONSE>>>", response);
      if (!response?.success) {
        return NotificationManager.error(response.message);
      } else {
        if (selectedRider.riderId !== "") {
          assignBikeToRider(
            "fromCreateBike",
            response.data.id,
            selectedRider.riderId
          );
        }
        toggleModal();
        const newBike = bike;
        setBikes([...bikes, newBike]);
        setBike({
          brand: "",
          license: "",
        });
        setTab("tab1");
        history.push("/bikes");
      }
      console.log(response);
    }
  };

  const getRidersAndBikes = async () => {
    showLoader();
    const riderResponse = await httpGet(`admin/all_users?type=rider`);
    const bikeResponse = await httpGet(`bike/all`);
    hideLoader();
    console.log("response>>>", bikeResponse);
    console.log("response>>>", riderResponse);
    if (bikeResponse?.success == false || riderResponse?.success == false) {
      return NotificationManager.error(riderResponse.message);
    }
    if (riderResponse.code === 200 && bikeResponse.code == 200) {
      const transformed = riderResponse.data.map(
        ({ id, firstName, lastName }) => ({
          label: `${firstName} ${lastName}`,
          value: id,
        })
      );
      setRiders(transformed);
      setBikes(bikeResponse.data);
      console.log(bikeResponse);
    }
    console.log(riderResponse);
  };

  const assignBikeToRider = async (from, bikeId, riderId) => {
    if (selectedRider.riderId == "") {
      return NotificationManager.error("Please select a rider");
    }
    showLoader();
    const response =
      from == "fromCreateBike"
        ? await httpPost(`bike/assign?bikeId=${bikeId}&riderId=${riderId}`)
        : await httpPost(
            `bike/assign?bikeId=${selectedRider.bikeId}&riderId=${selectedRider.riderId}`
          );
    hideLoader();
    console.log("RESPONSE>>>>>>CD>>>", response);
    if (!response.success) {
      console.log(response);
      return;
    }
    if (response.code === 200) {
      closeModal2();
      getRidersAndBikes();
      swal("success", "Bike assigned successfully", "success");
    }
    console.log(response);
  };

  useEffect(() => {
    getRidersAndBikes();
  }, []);

  return (
    <div>
      <div className="tableHeader1">
        <h2>Bikes</h2>
        <p>List of all the bikes</p>
      </div>
      <div className="createNewRyderBtn">
        <button onClick={openModal1}>Add new bike</button>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p>All</p>
          <p>With a rider </p>
          <p>Without a rider </p>
        </div>

        <div className="col2H2">
          <p>100 riders</p>
          <select name="" id="">
            <option value="">Show 5 rows</option>
          </select>
        </div>
      </div>

      <div className="ordersYTableWrap">
        <table class="styled-table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>License</th>
              <th>Rider</th>
              <th>Track</th>
              <th>Assign Rider</th>
            </tr>
          </thead>
          <tbody>
            {bikes.length ? (
              bikes.map((bike) => {
                return (
                  <tr key={bike?.id}>
                    <td>{bike?.brand}</td>
                    <td>{bike?.license}</td>
                    <td>
                      <img
                        class="userProfileImg"
                        src={bike?.assigned?.rider?.avatar || codeuiandy}
                        alt=""
                      />
                      {bike.assigned
                        ? `${bike.assigned.rider.firstName} ${bike.assigned.rider.lastName}`
                        : "Chuka Nduka"}
                    </td>
                    <td>{`50`}</td>
                    <td onClick={() => openModal2(bike)}>Pick Rider</td>
                  </tr>
                );
              })
            ) : (
              <p>No bike found</p>
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

      {/* MODAL: CREATE NEW BIKE SUCCESS */}
      <Modal open={showModal} onClose={toggleModal} center>
        <div className="modal-wrapper">
          <div className="modal-container">
            <section className="modal-info success ta-c">
              <h3 className="success__heading">Successfully added new bike</h3>
              <div className="success__img--wrapper">
                <img
                  src={img}
                  alt="add new bike success"
                  className="success__img"
                />
              </div>
              <Button
                width="100%"
                text="Create another rider"
                background="#0087ff"
                fontSize="14px"
                color="white"
                onClick={openModal1}
              />
              <Button
                width="100%"
                text="Close"
                background="#61696F26"
                fontSize="14px"
                color="#00101d"
                onClick={toggleModal}
              />
            </section>
          </div>
        </div>
      </Modal>

      {/* MODAL: CREATE NEW BIKE */}
      <Modal open={showModal1} onClose={closeModal1} center>
        <div className="createRiderModal">
          <div className="riderModalContainer">
            <div className="col1Rider col1RiderBike">
              <h2>Add new bike</h2>
              <ul>
                <li
                  className={`${
                    (tab == tab) == "tab1" || tab == "tab2" ? "activeBTab" : ""
                  }`}
                >
                  <div
                    className="tabPositionRider"
                    style={
                      tab == "tab1" || tab == "tab2"
                        ? { background: "orange" }
                        : {}
                    }
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Info</span>
                </li>
                <li className={`${tab == "tab2" ? "activeBTab" : ""}`}>
                  <div
                    className="tabPositionRider"
                    style={tab == "tab2" ? { background: "orange" } : {}}
                  >
                    <Image path="person.png" />
                  </div>
                  <span>Assign a bike</span>
                </li>{" "}
              </ul>
            </div>

            {tab == "tab1" ? (
              <div className="col2Rider">
                <form className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Input
                      label="Brand"
                      name="brand"
                      value={bike.brand}
                      onChange={onChange}
                      placeholder="Enter a bike brand"
                    />
                  </div>

                  <div className="riderInputWrapMain">
                    <Input
                      label="License"
                      name="license"
                      value={bike.license}
                      onChange={onChange}
                      placeholder="Enter a license number"
                    />
                  </div>

                  <div className="subRiderBtnWrap">
                    <Button
                      text="Cancel"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                      disabled={tab == "tab1" ? true : false}
                    />
                    <Button
                      onClick={() => {
                        handleTabSwitch("tab2");
                      }}
                      text="Next"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}

            {tab == "tab2" ? (
              <div className="col2Rider">
                <form action="" className="inputWrapRider">
                  <div className="riderInputWrapMain">
                    <Select
                      name="rider"
                      value={selectedOption}
                      placeholder="Enter rider name"
                      onChange={handleSelect}
                      options={riders}
                    />
                  </div>

                  <div className="subRiderBtnWrap">
                    <Button
                      text="Back"
                      background="#61696F26"
                      fontSize="14px"
                      color="black"
                      onClick={() => handleTabSwitch("tab1")}
                    />
                    <Button
                      onClick={handleSubmit}
                      text="Add"
                      color="white"
                      fontSize="14px"
                    />
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Modal>

      {/* MODAL: ASSIGN BIKE TO RIDER   */}
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
                name="rider"
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
                onClick={() => assignBikeToRider("fromAssign", null, null)}
              />
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default Bikes;
