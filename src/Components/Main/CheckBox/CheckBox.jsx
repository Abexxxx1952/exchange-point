import "./CheckBox.css";
import React from "react";
import { useState } from "react";

const CheckBox = () => {
  const [switched, setSwitched] = useState(true);
  const SwitchHandler = () => {
    switched ? setSwitched(false) : setSwitched(true);
  };
  return (
    <div className="checkbox">
      <div className={`inner ${switched ? "" : "active"}`}>
        <div className="toggle" onClick={SwitchHandler}></div>
      </div>
    </div>
  );
};

export default CheckBox;
