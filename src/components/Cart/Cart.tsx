import { useContext } from 'react';
import CartContext from '@/store/cart-context';
import Modal from '@/components/UI/Modal';
import type { TCartItem } from '@/types';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }: { onClose: () => void }) => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) throw new Error('Cart: cartCtx is not defined');

  const formattedTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleRemoveCartItem = (id: string) => {
    // ...
  };

  const handleAddCartItem = (item: TCartItem) => {
    // ...
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={handleRemoveCartItem.bind(null, item.id)}
      onAdd={handleAddCartItem.bind(null, item)}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
