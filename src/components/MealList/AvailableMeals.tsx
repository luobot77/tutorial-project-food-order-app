import Card from '@/components/UI/Card';
import { DUMMY_MEALS } from '@/data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
