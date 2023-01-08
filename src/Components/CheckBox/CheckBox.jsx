import React from "react";

import "./CheckBox.css";

const CheckBox = ({ switched, setSwitched }) => {
  const SwitchHandler = () => {
    switched ? setSwitched(false) : setSwitched(true);
  };
  console.log(switched);
  return (
    <div className="checkbox">
      <div className={`inner ${switched ? "" : "active"}`}>
        <div className="toggle__checkbox" onClick={SwitchHandler}></div>
      </div>
    </div>
  );
};

export { CheckBox };
