import React from 'react';
import "./Menu.css"

function menu({image, title, description}) {
    return (
        <div className="menu">
            <h3 className="mealstitle">{title}</h3>
            <p className="mealsdescription">
              <img src={image} alt="" />
              {description}
            </p>
        </div>
    );
}

export default menu;