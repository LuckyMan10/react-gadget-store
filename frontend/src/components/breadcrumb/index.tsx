import { FC } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

type breadCrumbItem = {
  title: string;
  path: string;
};

type Breadcrumbs = {
  breadCrumbData: Array<breadCrumbItem>;
};

const Breadcrumbs: FC<Breadcrumbs> = ({ breadCrumbData }) => {
  return (
    <div className={style.breadcrumbs}>
      <Breadcrumb>
        {breadCrumbData.map((item) => {
          if (breadCrumbData.indexOf(item) !== breadCrumbData.length - 1) {
            return (
              <Breadcrumb.Item key={item.title}>
                <Link to={item.path}>{item.title}</Link>
              </Breadcrumb.Item>
            );
          } else {
            return <Breadcrumb.Item key={item.title}>{item.title}</Breadcrumb.Item>;
          }
        })}
      </Breadcrumb>
    </div>
  );
};

export { Breadcrumbs };
