import { FC, useEffect, useState } from "react";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { Home } from "pages/home";
import Styled from "styled-components";
import { Router } from "./router";

type StyledAppProps = {
  emptyPageSize: number;
};

const StyledContent = Styled.div<StyledAppProps>`
  min-height: ${(props) => props.emptyPageSize}px;
`;

const App: FC = () => {
  const [emptyPageSize, setEmptyPageSize] = useState<number>(0);
  useEffect(() => {
    const size = window.innerHeight - (90 + 110);
    setEmptyPageSize(size);
    console.log(size);
  }, []);

  return (
    <div>
      <Header />
      <StyledContent emptyPageSize={emptyPageSize}>
      <Router />
      </StyledContent>
      <Footer />
    </div>
  );
};

export default App;
