import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dishes from "./Page/Dishes/Dishes";
import Home from "./Page/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DishesShop from "./Page/DishesShoop/DishesShoop";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/dishesShop" element={<DishesShop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
