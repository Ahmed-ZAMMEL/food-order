import { Item } from "../../../store/cart/cartReducer.model";

export interface CartItemTypeFC {
  cartItem: CartItemType;
}

export interface CartItemType {
  name: string;
  amount: number;
  price: number;
  onRemove: () => void;
  onAdd: () => void;
}
