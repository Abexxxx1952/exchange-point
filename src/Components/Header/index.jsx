import { NavLink } from "react-router-dom";

import { DropdownMenu } from "../DropdownMenu";

import icon from "../../Icons/exchange.svg";
import logo from "../../Icons/logo1.png";

import style from "./style.module.css";

const Header = ({ menuItems }) => {
  return (
    <header className={style.container}>
      <nav className={style.navigation}>
        <div className={style.row}>
          <div className={style.navbar__brand}>
            <NavLink to="/">
              <img src={icon} alt="icon" />
            </NavLink>
          </div>
          <div className={style.navbar__logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className={style.main__nav}>
            <ul>
              {menuItems.map((elem) => {
                return (
                  <li key={elem.value}>
                    <NavLink to={elem.path}>{elem.value}</NavLink>
                  </li>
                );
              })}
            </ul>
            <div className={style.navbar__dropdown}>
              <DropdownMenu menuItems={menuItems} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export { Header };
