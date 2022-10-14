import React, { useState } from "react";
// import "./App.css";


// import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";


import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Features from "./components/Features/Features";
import Foods from "../Foods/Foods";
import Footer from "../Footer/Footer";
// import Loading from "./components/Loading/Loading";
import TableReservation from "../TableReservation/TableReservation";
// import { InlineWidget } from "react-calendly";

// import {BrowserRouter, Routes} from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Foods />
      <TableReservation />
      <Footer />
    </>
  );
}

export default Home;
