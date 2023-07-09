import CartContext, { TCartContext } from './cart-context';
import type { TCartItem } from '@/types';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const handleAddItemToCart = (item: TCartItem) => {
    // ...
  };

  const handleRemoveItemFromCart = (id: string) => {
    // ...
  };

  const cartContext: TCartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
