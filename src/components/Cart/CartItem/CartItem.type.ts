export interface CartItemProps {
  cartItem: CartItemType;
}

export interface CartItemType {
  name: string;
  amount: number;
  price: number;
  onRemove: () => void;
  onAdd: () => void;
}
