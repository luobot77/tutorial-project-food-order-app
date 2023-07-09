import { useContext } from 'react';
import CartContext from '@/store/cart-context';
import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({
  id,
  name,
  description,
  price,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
}) => {
  const cartCtx = useContext(CartContext);
  if (!cartCtx) throw new Error('MealItem: CartContext is not defined');

  const formattedPrice = `$${price.toFixed(2)}`;

  const handleAddToCart = (amount: number) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
