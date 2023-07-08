import { DUMMY_MEALS } from '@/data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default AvailableMeals;
