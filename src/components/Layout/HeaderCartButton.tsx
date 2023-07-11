import { useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '@/components/Cart/CartIcon';
import useCartContext from '@/hooks/useCartContext';

const HeaderCartButton = ({ onClick }: { onClick: () => void }) => {
  const cartCtx = useCartContext();
  const [isHighlighted, setIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${isHighlighted && styles.bump}`;

  useEffect(() => {
    // 如果購物車沒有商品，則不執行動畫
    if (cartCtx.items.length === 0) return;
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnStyles} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
