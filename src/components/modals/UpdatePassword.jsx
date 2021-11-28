import { useState } from "react";
import Modal from "react-responsive-modal";
import img from "../../assets/imgF/security.png";
import "./modal.scss";
import { Button } from "../../components/buttons";

const UpdatePassword = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return (
    <Modal open={!openModal} onClose={closeModal} center>
      <div className="modal-wrapper">
        <div className="modal-container">
          <section className="modal-info success update-password">
            <h3 className="success__heading">Security</h3>
            <div className="success__img--wrapper">
              <img src={img} alt="security" className="success__img" />
            </div>
            <p className="cta">If you wish to update / change your password</p>
            <p className="proceed">Proceed</p>
            <Button
              width="100%"
              text="Proceed"
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

export default UpdatePassword;
