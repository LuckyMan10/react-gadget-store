import { FC } from "react";
import logo from "assets/icons/gadget-logo.png";
import style from "./style.module.scss";

const Logo: FC = () => {
  return (
    <div className={style.logo}>
      <img src={logo} />
    </div>
  );
};

export { Logo };
