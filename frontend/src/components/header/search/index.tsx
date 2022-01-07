import { FC } from "react";
import { Input, Space } from "antd";
import { searchProps } from "./searchProps";

const Search: FC = () => {
  const { Search } = Input;

  const onSearchHandler = () => {
    console.log("search");
  };

  return <Search onSearch={onSearchHandler} {...searchProps} />;
};

export { Search };
