import { FC, useState, MouseEvent, useEffect } from "react";
import { Checkbox } from "antd";
import { StyledList, CompanyList, Main, MainListWrapper } from "./style";
import { OpenButton } from "./openButton";
import { PriceSlider } from "./priceSlider";
import { CategoryList } from "./categoryList";
import { SearchButton } from "./searchButton";
import { ListHeader } from "./ListHeader";

const data = [
  {
    id: "1",
    title: "mp3 плееры"
  },
  {
    id: "2",
    title: "наушники"
  },
  {
    id: "3",
    title: "планшеты"
  },
  {
    id: "4",
    title: "смарт часы"
  },
  {
    id: "5",
    title: "электронные книги"
  },
  {
    id: "6",
    title: "смартфоны"
  }
];

const MainList: FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(true);
  const listClickHandler = (e: MouseEvent<HTMLUListElement>) => {
    const { id } = e.target as HTMLElement;
    if (id) {
      setActiveItem(id);
    }
  };
  const [pageSize, setPageSize] = useState<number>(0);

  useEffect(() => {
    const pageHeight = document.documentElement.scrollHeight;
    setPageSize(pageHeight)
    console.log('pageHeight: ', pageHeight)
  }, [])
  const openButtonHandler = () => {
    if (!open) {
      setActiveItem("");
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };
  const plainOptions = ["Apple", "Pear", "Orange", "Banana", "Mango"];

  return (
    <StyledList pageHeight={pageSize} isOpen={open}>
      <MainListWrapper>
        <ListHeader />
        <Main>
          <CategoryList listClickHandler={listClickHandler} data={data} activeItem={activeItem} />
          {activeItem && (
            <CompanyList>
              <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />
              <PriceSlider />
              <SearchButton />
            </CompanyList>
          )}
        </Main>
        <OpenButton open={open} openButtonHandler={openButtonHandler} />
      </MainListWrapper>
    </StyledList>
  );
};

export { MainList };
