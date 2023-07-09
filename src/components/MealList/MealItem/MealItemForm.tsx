import { useRef, useState } from 'react';
import Input from '@/components/UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }: { id: string; onAddToCart: (amount: number) => void }) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [isAmountValid, setIsAmountValid] = useState(true);

  const handleSubmit = (event: React.FormEvent) => {
    if (!amountInputRef.current) throw new Error('handleSubmit: amountInputRef is not defined');
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
