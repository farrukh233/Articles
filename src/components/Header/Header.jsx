import React from "react";
import LogoImage from "../../assets/img/terser.svg";
import { menu } from "./menu";
import styles from "./Header.module.scss";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={LogoImage} alt='logo' height='35' />
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button
            className={styles["login-button"]}
            onClick={() => history.replace("/about")}>
            Login
          </button>
          <button className={styles["sign-up-button"]}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
