
// import { Routes, Route } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from '../Hero/Hero';
import Oui from "./Oui";
import { HashLink as Link } from "react-router-hash-link";


function TableReservation() {
  return (
    <div>
     
        <Link to="#Heidi">Dokoooo</Link>

      <Oui />
      <p id="Heidi">
        Eyedi
      </p>

      <InlineWidget url="https://calendly.com/arthur-bineau/sanlazzaro" />
    </div>
  );
}

export default TableReservation;
