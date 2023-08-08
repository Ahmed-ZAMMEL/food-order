import { useReducer } from "react";
import PropsWithChildren from "../../models/propsWithChildren.model";
import CartContext from "./cart-context";
import { CartReducerAction, CartState, Item } from "./cartReducer.model";

const defaultCartState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: CartState,
  action: CartReducerAction
): CartState => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const indexToRemove = state.items.findIndex(
      (element) => element.id === action.item.id
    );
    const updatedItems = [
      ...state.items.slice(0, indexToRemove),
      ...state.items.slice(indexToRemove + 1),
    ];
    const updatedTotalAmount =
      state.totalAmount - action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartState, disptchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Item) => {
    disptchCartAction({ type: "ADD", item });
    console.log(cartState);
  };
  const removeItemFromCartHandler = (item: Item) => {
    disptchCartAction({ type: "REMOVE", item });
  };

  const CartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
