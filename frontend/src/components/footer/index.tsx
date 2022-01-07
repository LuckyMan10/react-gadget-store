import { FC } from "react";
import logo from "assets/icons/logo.svg";
import style from "./style.module.scss";

const Footer: FC = () => {
  return (
    <article className={style.footer}>
      <div className={style.logoWrapper}>
        <img src={logo} alt="footer-logo" />
        <p>Gadget store ©</p>
      </div>
      <div className={style.about}>
        <p>Author: LuckyMan10</p>
        <p>
          Github: <a href="https://github.com/LuckyMan10">Click me</a>
        </p>
      </div>
    </article>
  );
};

export { Footer };
