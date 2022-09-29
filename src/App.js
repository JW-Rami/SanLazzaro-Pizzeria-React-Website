import React, { useState } from "react";
import "./App.css";

// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Foods from "./components/Foods/Foods";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import TableReservation from "./components/TableReservation/TableReservation";
import { InlineWidget } from "react-calendly";
import {BrowserRouter, Routes} from 'react-router-dom';


function App() {
    const [isLoading, setIsLoading] = useState(true);
    window.addEventListener("load", () => {
        setIsLoading(false);
    });
    if (isLoading) {
        return <Loading />;
    }

    return (

        <div className="app">
            {/* <Routes>
            <Route path="/TableReservation"> element={<TableReservation /> }</Route>
            </Routes> */}
            <BrowserRouter >
               <Routes>
                {/* <Route path="/tablereservation" element={<h1>Bonsoir</h1>}/> */}
                
               </Routes>
            </BrowserRouter>

            <Header />
            <Hero />
            <Foods />
            <TableReservation/>
            <Footer />
        </div>
    );
}

export default App;
