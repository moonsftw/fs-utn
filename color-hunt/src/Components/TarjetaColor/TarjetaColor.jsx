import React from "react";
import Colores from "../Colores/Colores";
import "./TarjetaColor.css";

const TarjetaColor = (props) => {
  return (
    <div className="color-card">
      <div className="colors">
        <Colores colors={props.colores} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button>
          ❤️
          {props.meGusta}
        </button>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default TarjetaColor;
