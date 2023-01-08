import "./InputSearch.css";
import React from "react";

import { useState } from "react";

const InputSearch = ({ inputValue, setInputValue, currencies }) => {
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const [focus, setFocus] = useState(false);

  const itemSelect = (e) => {
    setInputValue(e.target.textContent);
    setFocus(false);
  };

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = (e) => {
    const focusOff = () => {
      setFocus(false);
    };
    setTimeout(focusOff, 150);
  };

  return (
    <div className="inputSearch__conteiner">
      <input
        className="inputSearch__input"
        value={inputValue}
        onChange={onChangeInput}
        onClick={onFocus}
        onBlur={onBlur}
      ></input>
      <div
        className={`autocomplete__conteiner ${
          focus ? "autocomplete__conteiner_active" : ""
        }`}
      >
        {currencies.map((elem) => (
          <div
            className="autocomplete__itemconteiner"
            key={elem.id}
            onClick={itemSelect}
          >
            <div className="autocomplete__item">{elem.currency}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputSearch;
