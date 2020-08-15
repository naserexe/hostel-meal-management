import React, { useContext, useEffect } from 'react'
import { Card, Typography} from 'antd';

import MealContext from '../context/meal/mealContext';

const { Text } = Typography;

const TotalMeal = () => {
  const mealContext = useContext(MealContext);

  const { getTotalMealCount, totalMealCount } = mealContext;

  useEffect(() => {
    getTotalMealCount();
    // eslint-disable-next-line
  }, [])
  return (
      <>
        <Card title="Total Meal" >
          <Text style={{fontSize:'50px'}} level={2} strong={true} type="warning">{totalMealCount >=0 ? totalMealCount : 'Loading...'}</Text>
        </Card>
      </>
  )
}

export default TotalMeal;