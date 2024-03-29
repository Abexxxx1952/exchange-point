import logo from "../../Icons/logo1.png";

import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer}>
        <div className={style.footer_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.footer_text}>
          <span>
            <h2>
              Что нужно знать про курс в обменниках Харькова Курс валют в
              Харькове не всегда стабилен.
            </h2>
            Существует ряд факторов, связанных с экономикой, финансами,
            политикой и другими сферами жизни, которые провоцируют его
            колебания. Зная эти причины изменений, получается наиболее точно
            прогнозировать цену денежной единицы на будущее. Это пригодится
            каждому, кто заключает сделки на международном уровне, инвестирует
            за рубеж, торгует котировками на биржах. Ну или просто хочет менять
            деньги выгодно.
          </span>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
