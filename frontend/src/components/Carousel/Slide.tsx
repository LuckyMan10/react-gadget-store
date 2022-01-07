import { FC } from "react";
import { Card } from "antd";

type slideProps = {
  image: string;
  title: string;
  price: string;
};

const Slide: FC<slideProps> = ({ image, title, price }) => {
  const { Meta } = Card;
  return (
    <div className="cardWrapper">
      <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={image} />}>
        <Meta title={title} />
        <Meta title={price} />
      </Card>
    </div>
  );
};

export { Slide };
