import { useState } from "react";
import Modal from "react-responsive-modal";
import img from "../../assets/imgF/update_rider_success.png";
import "./modal.scss";
import { Button } from "../../components/buttons";
import styles from "./modal.scss";

const CreatedNewRider = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return (
    <Modal open={!openModal} onClose={closeModal} center>
      <div className="modal-wrapper">
        <div className="modal-container">
          <section className="modal-info success ta-c">
            <h3 className="success__heading">Successfully created new rider</h3>
            <p className="success__note">
              An email will be sent to update them
            </p>
            <div className="success__img--wrapper">
              <img
                src={img}
                alt="create new rider success"
                className="success__img"
              />
            </div>
            <Button
              width="100%"
              text="Create another rider"
              background="#0087ff"
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
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default CreatedNewRider;
