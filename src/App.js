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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create-your-own" element={<CreateYourOwn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
