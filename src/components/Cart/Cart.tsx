import Modal from '@/components/UI/Modal';
import styles from './Cart.module.css';

const Cart = ({ onClose }: { onClose: () => void }) => {
  const cartItems = [
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    { id: 'c2', name: 'Schnitzel', amount: 3, price: 16.5 },
    { id: 'c3', name: 'Barbecue Burger', amount: 1, price: 22.99 },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={onClose}>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
