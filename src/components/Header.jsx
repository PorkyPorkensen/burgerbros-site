import React, { useEffect, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


export default function Header() {

  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="headDiv">
      <h1 className="header">Burger Bros<i className="fa-solid fa-trademark sm"></i> <i className="fa-solid fa-burger"></i></h1>
      <div className="linkDiv">
        <Link to="/">Home</Link> |{" "}
        <Link to="/Menu">Menu</Link> |{" "}
        <Link to="/Catering">Catering</Link> |{" "}
        <Link to="/PlaceOrder">Place Order</Link>{" "}
        <Link to="/PlaceOrder"><i className="fa-solid fa-cart-shopping"></i> {totalItems}</Link>
        
      </div>
      <Outlet />
    </div>
  );
}