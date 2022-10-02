// import { Routes, Route } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from '../Hero/Hero';
import { HashLink as Link } from "react-router-hash-link";

function TableReservation() {
  return (
    <div>
      <span id="tablereservation">
        <InlineWidget url="https://calendly.com/arthur-bineau/sanlazzaro" />
      </span>
    </div>
  );
}

export default TableReservation;
