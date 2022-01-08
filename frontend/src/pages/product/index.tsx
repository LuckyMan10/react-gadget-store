import { FC, useState } from "react";
import { StyledProduct, Wrapper } from "./style";
import { ProductCarousel } from "components/carousel";
import { Breadcrumbs } from "components/breadcrumb";
import { PriceProductBlock } from "components/priceProductBlock";

const sliderData = [
  "https://i.pcmag.com/imagery/reviews/067kOgD0fzK0RWW0ojgqGzQ-5.fit_lim.size_625x365.v1634914233.jpg",
  "https://stereo-news.com/wp-content/uploads/2019/09/1563611353376.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Xq7luF2FBLwQFJLZ-TEeL0YKaU7OFhQhrQ&usqp=CAU"
];
const breadCrumbData = [
  {
    title: "home",
    path: "/"
  },
  {
    title: "3434-545-6",
    path: "/product"
  }
];
const Product: FC = () => {
  return (
    <StyledProduct>
      <Breadcrumbs breadCrumbData={breadCrumbData} />
      <Wrapper>
        <ProductCarousel sliderData={sliderData} />
        <PriceProductBlock />
      </Wrapper>
    </StyledProduct>
  );
};

export { Product };
