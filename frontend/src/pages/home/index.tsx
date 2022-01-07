import { FC } from "react";
import { MainList } from "components/MainList";
import {MainItems} from 'components/MainItems';

const Home: FC = () => {
  return (
    <div className="home">
      <MainList />
      <MainItems />
    </div>
  );
};

export { Home };
