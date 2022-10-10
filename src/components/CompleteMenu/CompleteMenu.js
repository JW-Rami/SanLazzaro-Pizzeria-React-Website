import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import pdfFile from "../../assets/pdf/la_carte_2.pdf";
import pdfFile from "../../assets/pdf/la_carte.pdf";
import "./CompleteMenu.css";

function CompleteMenu(props) {
  return (
    <div className="pdfFile">
      {props.text}
    </div>
  );
}


export default CompleteMenu;
