import { useState } from "react";
import Modal from "react-responsive-modal";
import successImg from "../../assets/imgF/update_rider_success.png";
import "./modal.scss";
import { Button } from "../../components/buttons";
import styles from "./modal.scss";
 
const AddNewBike = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(!openModal);

  return (
    <Modal open={!openModal} onClose={closeModal} center>
      <div className="modal-wrapper">
        <div className="modal-container">
          <section className="modal-info success ta-c">
            <div className="left-div">
              <h3 className="success__heading">Add new bike</h3>
              <span>info</span>
              <span>Assign a bike</span>
            </div>
            <div className="right-div">
           
            </div>
          </section>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewBike;
