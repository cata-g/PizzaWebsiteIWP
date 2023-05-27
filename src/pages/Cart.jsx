import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import FinishOrderModal from "../components/FinishOrderModal";
import Swal from "sweetalert2";

export default function Cart({ cartItems, deleteFromCart, clearCartItems }) {
  const [isModalShown, setIsModalShwon] = useState(false);
  const handleClose = () => setIsModalShwon(false);
  const handleOpen = () => setIsModalShwon(true);

  return (
    <>
      <Navbar />
      <div
        className="container p-5"
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
        }}
      >
        {cartItems.length == 0 && <h1>Cart is Empty</h1>}
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Size</th>
              <th>Ingredients</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((itm, index) => {
              return (
                <tr key={index}>
                  <td>
                    {" "}
                    <img
                      src={require("../static/images/pizzas_menu/" + itm.img)}
                      style={{
                        width: "50px",
                        height: "40px",
                      }}
                    />
                  </td>
                  <td>{itm.name}</td>
                  <td>{itm.size}</td>
                  <td>{itm.description}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        console.log(cartItems);
                        Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteFromCart(index);
                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )
                          }
                        })
                      }}
                    >
                      Delete Me
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {cartItems.length !== 0 && (
          <div className="p-2 mt-5">
            <button className="btn button1 float-end" onClick={handleOpen}>
              Finish Order
            </button>
          </div>
        )}
      </div>
      <FinishOrderModal
        isShown={isModalShown}
        close={handleClose}
        cart={cartItems}
        clearCart={clearCartItems}
      />
      <Footer />
      <Copyright />
    </>
  );
}
