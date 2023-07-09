import { createContext } from 'react';
import type { TCartItem } from '@/types';

export type TCartContext = {
  items: TCartItem[];
  totalAmount: number;
  addItem: (item: TCartItem) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<TCartContext | null>(null);

export default CartContext;
