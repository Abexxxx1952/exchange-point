import style from "./Header.module.css";
import icon from "../../icons/exchange.svg";
import logo from "../../icons/logo1.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <div className={style.row}>
          <div className={style.navbar__brand}>
            <NavLink to="/">
              <img src={icon} alt="icon" />
            </NavLink>
          </div>
          <div className={style.navbar__logo}>
            <img src={logo} alt="logo" />
          </div>

          <div className={style.main__nav}>
            <ul>
              <li>
                <NavLink to="/map">Карта проезда</NavLink>
              </li>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
