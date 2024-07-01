import React from "react";
import "./Colores.css";

const Colores = (props) => {
  return (
    <div>
      {props.colors.map((color) => {
        return (
          <div key={color} style={{ backgroundColor: color }} className="color">
            <span className="hex-color">{color}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Colores;
