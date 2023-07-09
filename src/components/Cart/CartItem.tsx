import styles from './CartItem.module.css';

const CartItem = ({
  price,
  name,
  amount,
  onRemove,
  onAdd,
}: {
  price: number;
  name: string;
  amount: number;
  onRemove: unknown;
  onAdd: unknown;
}) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
