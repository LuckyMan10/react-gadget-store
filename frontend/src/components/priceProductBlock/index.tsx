import { FC } from "react";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import style from "./style.module.scss";

const PriceProductBlock: FC = () => {
  return (
    <section className={style.priceProductBlock}>
      <div className={style.priceProductBlockWrapper}>
      <div className={style.priceWrapper}>
        <span className={style.price}>40 000 RUB</span>
      </div>
      <div className={style.buttonsWrapper}>
        <Button size="large" icon={<HeartOutlined />}>Добавить в избранные</Button>
        <Button size="large">Добавить в корзину</Button>
      </div>
      </div>
    </section>
  );
};

export { PriceProductBlock };
