import { useEffect, useState } from "react";
import Meals from "../../../models/meals.model";
import Card from "../../UI/Card/Card";
import classes from "./AvailableMeals.module.scss";
import MealItem from "./MealItem/MealItem";

const AvailableMeals: React.FC<{}> = () => {
  const [meals, setMeals] = useState<Meals[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<Error>();

  useEffect(() => {
    //TO DO: replace fetch API withe Axios.
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-a3596-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        //TO DO create an error class.
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedMeals: Meals[] = [];
      for (const key in responseData) {
        //TO DO: add type.
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].desciption,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    //TO DO: Use try {} catch {} and await instead of catch().
    fetchMeals().catch((error) => {
      let fetchError = error as Error;
      setIsLoading(false);
      setHttpError(fetchError);
    });
  }, []);

  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

  //TO DO: add a general component for loading.
  if (isLoading) {
    return (
      <section className={classes["meals-loading"]}>
        <p>Loading ...</p>
      </section>
    );
  }
  //TO DO: add a general
  if (httpError) {
    return (
      <section className={classes["meals-error"]}>
        <p>{httpError.message}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
