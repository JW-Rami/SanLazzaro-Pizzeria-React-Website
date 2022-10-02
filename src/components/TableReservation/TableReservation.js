
// import { Routes, Route } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from '../Hero/Hero';
import Oui from "./Oui";
import { HashLink as Link } from "react-router-hash-link";


function TableReservation() {
  return (
    <div>
             <a href="">
            
        <Link to="#Heidi">Dokoooo</Link>
            </a>

      <Oui />

      <span id="tablereservation">
      
      <InlineWidget  url="https://calendly.com/arthur-bineau/sanlazzaro" />

      </span>
    </div>
  );
}

export default TableReservation;
