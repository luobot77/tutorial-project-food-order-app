import Header from '@/components/Layout/Header';
import MealList from '@/components/MealList/MealList';
import Cart from '@/components/Cart/Cart';

const App = () => {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <MealList />
      </main>
    </>
  );
};

export default App;
