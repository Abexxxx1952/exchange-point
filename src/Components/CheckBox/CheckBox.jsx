import "./CheckBox.css";
import React from "react";

const CheckBox = ({ switched, setSwitched }) => {
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
