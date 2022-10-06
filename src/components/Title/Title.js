import React from "react";
import "./Title.css";

function Title({ title }) {
    return (
        <div id="Italianfoods" className="title-container">
            <div className="title-wrapper">
                <h2 className="title" id="Foods">
                    {/* {title} */}
                   Nos spécialités italiennes...
                </h2>
                <div className="underline"></div>
            </div>
        </div>
    );
}

export default Title;
