import React, {useState} from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../../assets/pdf/la_carte_recto.pdf";

function CompleteMenu(props) {
  return (
    <div>
        {props.text}
      <p>
        <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document>
      </p>
    </div>
  );
}

export default CompleteMenu;
