import React from "react";
// import { Routes, Route } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Hero from '../Hero/Hero';


function TableReservation() {
return (
    <div id="tablereservation">

    <InlineWidget url="https://calendly.com/arthur-bineau/sanlazzaro" />
    <BrowserRouter>
    <Link to ="#test" >Doko</Link>
        <Routes>
            <Route path="/tablereservation" element={"<Hero/>"} />
        </Routes>
    </BrowserRouter>

    </div>
)
}

export default TableReservation;