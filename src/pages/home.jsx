import React from "react";
import Navbar from "../components/Navbar"
import homePho from "../assets/hopi.jpg"
import ProductList from "../components/ProductList";
import Footer from "../components/Footer"
import ShopContextProvider from "../contexts/shopContext"
import Popup from "../components/Popup"
import "../App.css";


export default function Home() {
  return (
  <ShopContextProvider>
  <Navbar />
  <img src={homePho} alt="no-pho" className="img" />
  <ProductList />
  <Popup/>
  <Footer />
  </ShopContextProvider>
  )}