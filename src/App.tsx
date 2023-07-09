import { useState } from 'react';

import Header from '@/components/Layout/Header';
import MealList from '@/components/MealList/MealList';
import Cart from '@/components/Cart/Cart';
import CartProvider from '@/store/CartProvider';

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const handleShowCart = () => {
    setIsCartShown(true);
  };

  const handleHideCart = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <MealList />
      </main>
    </CartProvider>
  );
};

export default App;
