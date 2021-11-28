import { useState } from "react";
import Modal from "react-responsive-modal";
import redEllipse from "../../assets/imgF/red_ellipse.png";
import greenEllipse from "../../assets/imgF/green_ellipse.png";
import codeuiandy from "../../assets/imgF/codeuiandyimg.png";
import "./modal.scss";
import { Button } from "../buttons";
import styles from "./modal.scss";

const ActivateUser = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(!showModal);

  const isActivated = true;

  return (
    <Modal open={showModal} onClose={closeModal} center>
      <div className="activate-user__modal">
        <div className="activate-user__modal-wrapper">
          <section className="activate-user">
            <div className="activate-user__col--left">
              <div className="img--container">
                <div className="img--wrapper">
                  <img src={codeuiandy} alt="" className="activate-user__img" />
                </div>
                <img
                  src={isActivated ? greenEllipse : redEllipse}
                  alt={""}
                  className="activate-user--isActive img--ellipse"
                />
              </div>
              <h6 className="activate-user__name">Andrew Dubai</h6>
              <div className="activate-user__status">
                <p>Current Status</p>
                <p
                  className={`activate-user--${
                    isActivated ? "activated" : "deactivated"
                  }`}
                >
                  {isActivated ? "Active" : "Deactivated"}
                </p>
              </div>
            </div>
            <div className="activate-user__col--right">
              <h6 className="activate-user__heading">
                {`${isActivated ? "Deactivate" : "Activate"} this user?`}
              </h6>
              <Button
                width="100%"
                text={isActivated ? "Deactivate" : "Activate"}
                background={isActivated ? "#CC5148" : "#499F68"}
                fontSize="14px"
                color="white"
              />
              <Button
                width="100%"
                text="Cancel"
                background="#61696F26"
                fontSize="14px"
                color="#00101d"
              />
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default ActivateUser;
