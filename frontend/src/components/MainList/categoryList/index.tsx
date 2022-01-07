import { FC, MouseEvent } from "react";
import { StyledList } from "./style";

type CategoryList = {
  listClickHandler(e: MouseEvent<HTMLUListElement>): void;
  data: Array<{ id: string; title: string }>;
  activeItem: string | null;
};

const CategoryList: FC<CategoryList> = ({ listClickHandler, data, activeItem }) => {
  return (
    <StyledList>
      <ul onClick={listClickHandler}>
        {data.map((el) => {
          return (
            <li className={el.id === activeItem ? "active" : ""} id={el.id} key={el.title}>
              {el.title}
            </li>
          );
        })}
      </ul>
    </StyledList>
  );
};

export { CategoryList };
