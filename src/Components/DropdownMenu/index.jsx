import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const DropdownMenu = ({ menuItems }) => {
  const [dropped, setDropped] = useState(false);

  const DropToggleHandler = () => {
    dropped ? setDropped(false) : setDropped(true);
  };

  const navigate = useNavigate();
  const menuClick = (menuPath) => {
    navigate(`${menuPath}`);
  };

  return (
    <div
      className={
        dropped ? `${style.active} ${style.container}` : `${style.container}`
      }
      onClick={DropToggleHandler}
    >
      <div className={style.menu}>
        <span className={`${style.line} ${style.line__one}`}></span>
        <span className={`${style.line} ${style.line__two}`}></span>
        <span className={`${style.line} ${style.line__three}`}></span>
      </div>
      <ul
        className={
          dropped
            ? `${style.dropdown__menu} ${style.show__dropdown}`
            : `${style.dropdown__menu}`
        }
      >
        {menuItems.map((elem) => {
          return (
            <li className={style.dropdown__item} key={elem.value}>
              <span
                className={style.dropdown__name}
                onClick={() => {
                  menuClick(elem.path);
                }}
              >
                {elem.value}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export { DropdownMenu };
