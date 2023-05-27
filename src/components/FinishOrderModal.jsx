import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FinishOrderModal({ isShown, close, cart, clearCart }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const navigation = useNavigate();

  return (
    <Modal show={isShown} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title> One more step ... </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <form>
          <div className="form-group">
            <label htmlFor="inputName">Name *</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Enter your name"
              name="nameFrom"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhone">Phone Number *</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              placeholder="Enter your Phone Number"
              name="phoneFrom"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email *</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              placeholder="Enter your email"
              name="emailFrom"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDeliveryLocation">Delivery Location *</label>
            <textarea
              className="form-control"
              id="inputDeliveryLocation"
              rows="2"
              name="deliveryLocation"
              placeholder="Enter the delivery location"
              onChange={(event) => setDeliveryLocation(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddtionalInfo">Additional Info</label>
            <textarea
              className="form-control"
              id="inputAddtionalInfo"
              rows="3"
              name="additionalInfo"
              placeholder="Tell us anything"
              onChange={(event) => setAdditionalInfo(event.target.value)}
            />
          </div>
        </form>
        <p>* fields are mandatory</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={close}>
          Close
        </Button>
        <Button
          variant="outline-success"
          onClick={() => {
            if (
              name === "" ||
              email === "" ||
              phoneNumber === "" ||
              deliveryLocation === ""
            )
              alert("Please complete all the mandatory fields!");
            else {
              let pizzaNames = "";
              let pizzaSizes = "";
              cart.map((itm) => {
                pizzaNames += itm.name + "( " + itm.description + " )" + "\n";
                pizzaSizes += itm.size + ", ";
              });

              const order = {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                pizzaName: pizzaNames,
                pizzaSize: pizzaSizes,
                deliveryLocation: deliveryLocation,
                additionalInfo: additionalInfo,
              };

              fetch("http://localhost:5000/order/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
              }).then(() => {
                alert("Thank You For Your Order! See you soon!");
                clearCart();
                navigation("/");
              });
            }
          }}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
