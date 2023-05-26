import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/MainPage";
import CreateYourOwn from "./pages/CreateYourOwn";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cartObj) => {
    var tempCart = [...cart];
    tempCart.push(cartObj);
    setCart(tempCart);
    console.log(cart);
  };

  const deleteFromCart = (index) => {
    var tempCart = [...cart];
    delete tempCart[index];
    setCart(tempCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create-your-own" element={<CreateYourOwn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu addToCartFunction={addToCart} />} />
        <Route
          path="cart"
          element={<Cart cartItems={cart} deleteFromCart={deleteFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
