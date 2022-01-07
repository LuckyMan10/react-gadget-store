import { FC } from "react";
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
import {StyledArrow} from './style';

type Arrow = {
  type: string;
  setSelectedItem(arg: number): void;
  selectedItem: number;
  slidersLength: number;
};

const Arrow: FC<Arrow> = ({ type, setSelectedItem, selectedItem, slidersLength }) => {
  const arrowClickHandler = () => {
    if (type === "prev" && selectedItem !== 0) {
      setSelectedItem(selectedItem - 1);
    }
    if (type === "prev" && selectedItem === 0) {
      setSelectedItem(slidersLength - 1);
    }
    if (type === "next" && selectedItem !== slidersLength - 1) {
      setSelectedItem(selectedItem + 1);
    }
    if (type === "next" && selectedItem === slidersLength - 1) {
      setSelectedItem(0);
    }
  };

  return (
    <StyledArrow>
      <button onClick={arrowClickHandler}>
        {type === "prev" ? <CaretLeftOutlined /> : <CaretRightOutlined />}
      </button>
    </StyledArrow>
  );
};

export { Arrow };
