import { FC } from "react";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { CurrentOffersCarousel } from "components/Carousel";
import { MainList } from "components/MainList";

const App: FC = () => {
  return (
    <div>
      <Header />
      <MainList />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
