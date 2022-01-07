import { FC, useRef } from "react";
import { Rerousel } from "rerousel";
import phone from "assets/images/phone.jpg";
import { StyledCarousel } from "./style";
import { Slide } from "./Slide";

const products = [
  {
    id: 1,
    key: "slider-product-key-1",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  },
  {
    id: 2,
    key: "slider-product-key-2",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  },
  {
    id: 3,
    key: "slider-product-key-3",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  },
  {
    id: 4,
    key: "slider-product-key-4",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  },
  {
    id: 5,
    key: "slider-product-key-5",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  },
  {
    id: 6,
    key: "slider-product-key-6",
    image: phone,
    title: "Honor 10",
    price: "10 000 RUB"
  }
];

const CurrentOffersCarousel: FC = () => {
  const ref = useRef(null);

  return (
    <StyledCarousel>
      <h1>Актуальные предложения</h1>
      <Rerousel itemRef={ref}>
        {products.map((element) => {
          return (
            <div key={element.key} ref={ref} className="slideWrapper">
              <Slide {...element} />
            </div>
          );
        })}
      </Rerousel>
    </StyledCarousel>
  );
};

export { CurrentOffersCarousel };
