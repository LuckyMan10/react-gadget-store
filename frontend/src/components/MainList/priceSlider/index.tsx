import { FC, useState } from "react";
import { Slider } from "antd";
import { useDebounce } from "rooks";
import style from "./style.module.scss";

const PriceSlider: FC = () => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([4000, 10000]);

  const sliderChangeHandler = (change: [number, number]) => {
    setSliderValue(change);
  };
  const setValueDebounced = useDebounce(sliderChangeHandler, 300);

  return (
    <section className={style.priceSlider}>
      <h3>Цена</h3>
      <Slider onChange={setValueDebounced} range defaultValue={sliderValue} max={30000} />
      <p>
        От {sliderValue[0]} до {sliderValue[1]} Рублей
      </p>
    </section>
  );
};

export { PriceSlider };
