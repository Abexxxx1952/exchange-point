import { useState, useEffect } from "react";

import { InputSearch } from "../../Components/InputSearch";
import { CheckBox } from "../../Components/CheckBox";
import { CardGraphicOne } from "../../Components/CardGraphicOne";
import useLazyScrollLoading from "../../Hooks/useLazyScrollLoadingIntersectionObserver";
import useAutocomplete from "../../Hooks/useAutocomplete";

import style from "./style.module.css";

const CardGraphics = ({ currencies, switched, setSwitched }) => {
  const [inputValue, setInputValue] = useState("");

  const filteredCurrencies = useAutocomplete(inputValue, currencies);

  const initialMaxCount = 12;
  const addStep = 6;

  const [refContainer, maxCount] = useLazyScrollLoading(
    initialMaxCount,
    currencies.length,
    addStep
  );

  const [currenciesSliced, setCurrenciesSliced] = useState(
    filteredCurrencies.slice(0, maxCount)
  );

  useEffect(() => {
    setCurrenciesSliced(filteredCurrencies.slice(0, maxCount));
    // eslint-disable-next-line
  }, [maxCount, inputValue, currencies]);

  return (
    <main className={style.body}>
      <div className={style.inputsearch__container}>
        <InputSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
          currencies={filteredCurrencies}
        />
      </div>
      <div className={style.checkbox__container}>
        <CheckBox switched={switched} setSwitched={setSwitched} />
      </div>

      <div className={style.card__container}>
        {currenciesSliced.map((elem, index) => {
          if (currenciesSliced.length === index + 1) {
            return (
              <div
                className={style.card__under}
                key={elem.id}
                ref={refContainer}
              >
                <CardGraphicOne
                  currency={elem.currency}
                  value={elem.value}
                  id={elem.id}
                  dataRechart={elem?.dataRechart}
                  dataNivo={elem?.dataNivo}
                  difference={elem.difference}
                  currentCurrency={elem.cc}
                  switched={switched}
                />
              </div>
            );
          }
          return (
            <div className={style.card__under} key={elem.id}>
              <CardGraphicOne
                currency={elem.currency}
                value={elem.value}
                id={elem.id}
                dataRechart={elem?.dataRechart}
                dataNivo={elem?.dataNivo}
                difference={elem.difference}
                currentCurrency={elem.cc}
                switched={switched}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export { CardGraphics };
