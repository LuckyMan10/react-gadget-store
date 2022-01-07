import { FC } from "react";
import { Button } from "antd";
import { buttons } from "./buttons-data";
import style from "./style.module.scss";

const Buttons: FC = () => {
  return (
    <section className={style.buttons}>
      {buttons.map((button) => {
        return (
          <Button icon={button.icon} key={button.key}>
            {button.text}
          </Button>
        );
      })}
    </section>
  );
};

export { Buttons };
