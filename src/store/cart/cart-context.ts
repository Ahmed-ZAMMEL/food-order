import React from "react";
import { CartContextModel, Item } from "./cartReducer.model";

const CartContext = React.createContext<CartContextModel>({
  items: [],
  totalAmount: 0,
  addItem: (item: Item): void => {},
  removeItem: (item: Item): void => {},
});

export default CartContext;
