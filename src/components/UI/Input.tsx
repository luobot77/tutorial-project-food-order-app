import styles from './Input.module.css';

const Input = ({
  input,
  label,
}: {
  input: {
    id: string;
    type: 'number';
    min: number;
    max: number;
    step: number;
    defaultValue: number;
  };
  label: string;
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
