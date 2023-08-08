export interface CartReducerAction {
  type: string;
  item: Item;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface CartState {
  items: Item[];
  totalAmount: number;
}

export interface CartContextModel {
  items: Item[];
  totalAmount: number;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}
