import { Reducer, useReducer } from 'react';
import CartContext, { TCartContext } from './cart-context';
import type { TCartItem } from '@/types';

type TCartState = {
  items: TCartItem[];
  totalAmount: number;
};

enum ECartAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

type TCartAction = { type: ECartAction.ADD; item: TCartItem } | { type: ECartAction.REMOVE; id: string };

const initialCartState: TCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer: Reducer<TCartState, TCartAction> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    case 'REMOVE':
      return state;
    default:
      throw new Error('cartReducer: unknown action type');
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

  const handleAddItemToCart = (item: TCartItem) => {
    dispatchCartAction({ type: ECartAction.ADD, item });
  };

  const handleRemoveItemFromCart = (id: string) => {
    dispatchCartAction({ type: ECartAction.REMOVE, id });
  };

  const cartContext: TCartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
