import { useContext } from 'react';
import CartContext from '@/store/cart-context';
import styles from './HeaderCartButton.module.css';
import CartIcon from '@/components/Cart/CartIcon';

const HeaderCartButton = ({ onClick }: { onClick: () => void }) => {
  const cartCtx = useContext(CartContext);

  if (!cartCtx) throw new Error('HeaderCartButton: CartContext is not defined');

  const numberOfCartItems = cartCtx.items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
