import { useState } from "react";
import Modal from "react-responsive-modal";
import img from "../../assets/imgF/update_profile_success.png";
import "./modal.scss";
import styles from "./modal.scss";

const UpdatedProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(!openModal);

  return (
    <Modal open={!openModal} onClose={closeModal} center>
      <div className="modal-wrapper">
        <div className="modal-container">
          <section className="modal-info success ta-c">
            <h3 className="success__heading">Successfully updated profile</h3>
            <div className="success__img--wrapper">
              <img
                src={img}
                alt="profile update success"
                className="success__img"
              />
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default UpdatedProfileModal;
