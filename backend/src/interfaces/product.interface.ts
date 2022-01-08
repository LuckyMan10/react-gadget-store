type cartProduct = {
  productId: string;
  quantity: number;
  product: {
    company: string;
    name: string;
    price: number;
    images: string[];
    description: Array<{
      [key: string]: string;
    }>;
    category: string;
    id: string;
  };
};
type favProduct = Omit<cartProduct, "quantity">;

export { cartProduct, favProduct };
