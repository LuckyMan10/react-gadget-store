import { FC } from "react";
import { Logo } from "./logo";
import { Buttons } from "./buttons";
import { Search } from "./search";
import style from "./style.module.scss";

const Header: FC = () => {
  return (
    <section className={style.header}>
      <Logo />
      <Search />
      <Buttons />
    </section>
  );
};

export { Header };
