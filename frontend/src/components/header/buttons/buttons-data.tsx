import { UserOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";

const buttons = [
  {
    id: "1",
    key: "account-button",
    icon: <UserOutlined />,
    text: "login"
  },
  {
    id: "2",
    key: "cart-button",
    icon: <ShoppingCartOutlined />,
    text: "cart"
  },
  {
    id: "3",
    key: "heart-button",
    icon: <HeartOutlined />,
    text: "favorite"
  }
];

export { buttons };
