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
      // 更新總金額
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      // 檢查購物車是否已有該商品項目
      const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      // 如果購物車中已經有該商品項目，則更新其數量
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // 如果購物車中沒有該商品項目，則新增該商品
        updatedItems = state.items.concat(action.item); // concat 返回新的 array
      }

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
