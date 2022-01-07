import { FC } from "react";
import { MainList } from "components/mainList";
import { MainItems } from "components/mainItems";

const Home: FC = () => {
  return (
    <div className="home">
      <MainList />
      <MainItems />
    </div>
  );
};

export { Home };
