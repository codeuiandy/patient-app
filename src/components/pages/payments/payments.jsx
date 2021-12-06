import React, { useState } from "react";
import Modal from "react-responsive-modal";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
import { Button } from "../../buttons/index";
import { Input, Select } from "../../input/Input";
import checkCancel from "./../../../assets/imgF/cancel_black_24dp@2x.png";
import "./../../modals/modal.scss";
import "./payments.css";

const Orders = () => {
  const [createRefundReceiptModal, setCreateRefundReceiptModal] =
    useState(false);

  const [createDiscountModal, setCreateDiscountModal] = useState(false);

  const toggleCreateReceiptModal = () => {
    setCreateRefundReceiptModal(!createRefundReceiptModal);
  };

  const toggleDiscountModal = () => {
    setCreateDiscountModal(!createDiscountModal);
  };

  return (
    <div>
      <div className="tableHeader1">
        <h2>Payments</h2>
        <p>List of receipt</p>
      </div>

      <div className="createNewRyderBtn">
        <button
          // onClick={() => {
          //   toggleCreateReceiptModal();
          // }}
          onClick={() => {
            toggleDiscountModal();
          }}
        >
          Create
        </button>
      </div>

      <div className="tableHeader2">
        <div className="col1H2">
          <p>All</p>
          <p>Completed Delivery</p>
          <p>Failed Delivery</p>
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
              <th>User</th>
              <th>Date</th>
              <th>Delivery amount</th>
              <th>Delivery status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reciept_03jan2021</td>
              <td>Lola Jesu</td>
              <td>27/03/2021</td>
              <td>3,500</td>
              <td>
                <img
                  src={checkCancel}
                  className="payment--isSuccess img-ellipse"
                  alt=""
                />
                Completed
              </td>
            </tr>
            <tr class="active-row">
              <td>Reciept_03jan2021</td>
              <td>Lola Jesu</td>
              <td>27/03/2021</td>
              <td>3,500</td>
              <td>
                <img
                  src={checkCancel}
                  className="payment--isSuccess img-ellipse"
                  alt=""
                />
                Completed
              </td>
            </tr>

            <tr class="active-row">
              <td>Reciept_03jan2021</td>
              <td>Lola Jesu</td>
              <td>27/03/2021</td>
              <td>3,500</td>
              <td>
                <img
                  src={checkCancel}
                  className="payment--isSuccess img-ellipse"
                  alt=""
                />
                Completed
              </td>
            </tr>

            <tr class="active-row">
              <td>Reciept_03jan2021</td>
              <td>Lola Jesu</td>
              <td>27/03/2021</td>
              <td>3,500</td>
              <td>
                <img
                  src={checkCancel}
                  className="payment--isSuccess img-ellipse"
                  alt=""
                />
                Completed
              </td>
            </tr>

            <tr class="active-row">
              <td>Reciept_03jan2021</td>
              <td>Lola Jesu</td>
              <td>27/03/2021</td>
              <td>3,500</td>
              <td>
                <img
                  src={checkCancel}
                  className="payment--isSuccess img-ellipse"
                  alt=""
                />
                Completed
              </td>
            </tr>
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

      {/* <Modal
        open={createRefundReceiptModal}
        onClose={toggleCreateReceiptModal}
        center
      >
        <div className="modal-wrapper">
          <div className="modal-container">
            <section className="modal-info refund-receipt">
              <h3 className="modal__heading">Create a refund receipt </h3>
              <div className="riderInputWrapMain">
                <Input
                  label="Customer"
                  name="customer"
                  value=""
                  onChange=""
                  placeholder="Okeke"
                />
              </div>
              <div className="riderInputWrapMain">
                <Input
                  label="Refund amount"
                  name="refundAmount"
                  value=""
                  onChange=""
                  placeholder="Okeke"
                />
              </div>

              <Button
                width="100%"
                text="Create refund receipt"
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
                onClick={toggleCreateReceiptModal}
              />
            </section>
          </div>
        </div>
      </Modal> */}

      <Modal open={createDiscountModal} onClose={toggleDiscountModal} center>
        <div className="modal-wrapper">
          <div className="modal-container">
            <section className="modal-info discount">
              <h3 className="modal__heading">Discount</h3>
              <p className='discount__text'>Creating discount</p>

              <div className="select-user__btns">
                <button className="select-btn active">All users</button>
                <button className="select-btn">Group of users</button>
                <button className="select-btn">One user</button>
              </div>

              <div className="discount-amount">
                <label>
                  <input style={{ width: "20px" }} type="radio" name="" id="" />
                  <span>Percentage</span>
                </label>
                <label>
                  <input style={{ width: "20px" }} type="radio" name="" id="" />
                  <span>Specific amount</span>
                </label>
              </div>

              <div className="riderInputWrapMain">
                <Input
                  label="Amount"
                  name="refundAmount"
                  value=""
                  onChange=""
                />
              </div>
              <div className="riderInputWrapMain">
                <Select
                  name="country"
                  value=""
                  options={["Nigeria", "England"]}
                  defaultValue="Select timeline"
                  label="Timeline"
                  onChange=""
                />
              </div>

              <Button
                width="100%"
                text="Create Discount"
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
                onClick={toggleDiscountModal}
              />
            </section>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Orders;
