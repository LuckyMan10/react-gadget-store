import { FC, useState } from "react";
import { StyledCarousel, StyledSlide } from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Arrow } from "./arrow";

type ProductCarousel = {
  sliderData: string[];
};

const ProductCarousel: FC<ProductCarousel> = ({ sliderData }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const arrowProps = {
    slidersLength: sliderData.length,
    setSelectedItem,
    selectedItem
  };

  return (
    <StyledCarousel>
      <Arrow type="prev" {...arrowProps} />
      <Carousel showArrows={false} selectedItem={selectedItem} showStatus={false} showIndicators={false}>
        {sliderData.map((image, index) => {
          return (
            <StyledSlide key={`slider-key-${index}`}>
              <img src={image} />
            </StyledSlide>
          );
        })}
      </Carousel>
      <Arrow type="next" {...arrowProps} />
    </StyledCarousel>
  );
};

export { ProductCarousel };
