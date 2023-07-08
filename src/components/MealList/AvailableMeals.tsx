import Card from '@/components/UI/Card';
import MealItem from '@/components/MealList/MealItem/MealItem';

import { DUMMY_MEALS } from '@/data/dummy-meals';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
