import { forwardRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
  input: {
    id: string;
    type: 'number';
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  };
  label: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
