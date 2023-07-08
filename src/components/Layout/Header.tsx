import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import mealsImage from '@/assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
