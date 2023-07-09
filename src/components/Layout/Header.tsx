import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import mealsImage from '@/assets/meals.jpg';

const Header = ({ onShowCart }: { onShowCart: () => void }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
