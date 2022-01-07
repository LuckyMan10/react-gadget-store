import { FC } from "react";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import style from "./style.module.scss";

type OpenButton = {
  open: boolean;
  openButtonHandler(): void;
};

const OpenButton: FC<OpenButton> = ({ open, openButtonHandler }) => {
  return (
    <button onClick={openButtonHandler} className={style.openButton}>
      {open ? <RightCircleOutlined /> : <LeftCircleOutlined />}
    </button>
  );
};

export { OpenButton };
