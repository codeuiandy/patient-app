import React from "react";
import "./payments.css";
import codeuiandy from "../../../assets/imgF/codeuiandyimg.png";
import checkCancel from "./../../../assets/imgF/cancel_black_24dp@2x.png";
import checkSuccess from "./../../../assets/imgF/check_circle_black_24dp@2x.png";
import arrowR from "../../../assets/imgF/arrow_back_ios_black_24dp@2x.png";
const Orders = () => {
  return (
    <div>
      <div className="tableHeader1">
        <h2>Payments</h2>
        <p>List of receipt</p>
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
    </div>
  );
};

export default Orders;
