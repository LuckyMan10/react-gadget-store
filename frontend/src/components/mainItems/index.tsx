import { FC } from "react";
import { Card } from "antd";
import { data } from "./fakeData";
import { StyledMainItems, MainItemsWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { appEnum } from "router/appRoutes";

const MainItems: FC = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const mainItemsClickHandler = () => {
    navigate(`${appEnum.PRODUCT}/3434-545-6`);
  };

  return (
    <StyledMainItems>
      <MainItemsWrapper onClick={mainItemsClickHandler}>
        {data.map((el) => {
          return (
            <Card
              key={el.key}
              hoverable
              style={{ width: 280 }}
              cover={<img alt="example" src={el.image} />}>
              <Meta title={el.title} description={`${el.price} RUB`} />
            </Card>
          );
        })}
      </MainItemsWrapper>
    </StyledMainItems>
  );
};

export { MainItems };
