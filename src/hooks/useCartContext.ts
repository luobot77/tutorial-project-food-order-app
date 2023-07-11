import { useContext } from 'react';
import CartContext from '@/store/cart-context';

const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) throw new Error('useCartContext has to be used with <CartContext.Provider>');

  return cartContext;
};

export default useCartContext;
