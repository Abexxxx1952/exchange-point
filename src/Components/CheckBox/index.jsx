import "./style.css";

const CheckBox = ({ switched, setSwitched }) => {
  const SwitchHandler = () => {
    switched ? setSwitched(false) : setSwitched(true);
  };

  return (
    <div className="checkbox">
      <div className={`inner ${switched ? "" : "active"}`}>
        <div className="toggle__checkbox" onClick={SwitchHandler}></div>
      </div>
    </div>
  );
};

export { CheckBox };
