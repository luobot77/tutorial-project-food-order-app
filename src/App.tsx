import { useState } from 'react';

import Header from '@/components/Layout/Header';
import MealList from '@/components/MealList/MealList';
import Cart from '@/components/Cart/Cart';

const App = () => {
  const [isCartShown, setIsCartShown] = useState(false);

  const handleShowCart = () => {
    setIsCartShown(true);
  };

  const handleHideCart = () => {
    setIsCartShown(false);
  };

  return (
    <>
      {isCartShown && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <MealList />
      </main>
    </>
  );
};

export default App;
