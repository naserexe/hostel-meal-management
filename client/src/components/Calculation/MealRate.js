import React, { useContext, useEffect } from 'react'
import { Card, Typography} from 'antd';

import CalculationContext from '../context/calculation/calculationContext';

const { Text } = Typography;

const MealRate = () => {
  const calculationContext = useContext(CalculationContext);

  const { mealRate, getMealRate } = calculationContext;

  useEffect(() => {
    getMealRate();
    // eslint-disable-next-line
  }, []);

  
  return (
      <>
        <Card title="Meal Rate" loading={mealRate === null ? true : false}>
          <Text style={{fontSize:'30px'}} level={2} strong={true} type="warning">
            ${mealRate >=0 ? mealRate : 'Loading...'}
          </Text>
        </Card>
      </>
  )
}

export default MealRate;