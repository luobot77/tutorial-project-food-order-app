import { Reducer, useReducer } from 'react';
import CartContext, { TCartContext } from './cart-context';
import type { TCartItem } from '@/types';

type TCartState = {
  items: TCartItem[];
  totalAmount: number;
};

enum ECartActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

type TCartAction = { type: ECartActionType.ADD; item: TCartItem } | { type: ECartActionType.REMOVE; id: string };

const initialCartState: TCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer: Reducer<TCartState, TCartAction> = (state, action) => {
  switch (action.type) {
    case ECartActionType.ADD: {
      const updatedItems = state.items.concat(action.item); // concat 返回新的 array
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case ECartActionType.REMOVE: {
      // TODO: 
      return state;
    }
    default:
      throw new Error('cartReducer: unknown cart action type');
  }
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState);

  const handleAddItemToCart = (item: TCartItem) => {
    dispatchCartAction({
      type: ECartActionType.ADD,
      item,
    });
  };

  const handleRemoveItemFromCart = (id: string) => {
    dispatchCartAction({
      type: ECartActionType.REMOVE,
      id,
    });
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
