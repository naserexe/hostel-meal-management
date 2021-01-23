import React, { useContext, useEffect } from 'react'
import { Card, Typography} from 'antd';

import ExpenseContext from '../context/expense/expenseContext'
import { currencyFormat } from '../../utils/currencyFormat'



const { Text } = Typography;

const TotalExpense = () => {
  const expenseContext = useContext(ExpenseContext);

  const { getTotalExpenseCost, totalExpenseCost } = expenseContext;

  useEffect(() => {
    getTotalExpenseCost();
    // eslint-disable-next-line
  }, [])
  return (
      <>
        <Card title="Total Expense" loading={totalExpenseCost === null ? true : false}>
          <Text style={{fontSize:'30px', color: '#a61d24'}} level={2} strong={true} type="warning">   {totalExpenseCost >=0 ? currencyFormat(Number(totalExpenseCost)) : 'Loading...'}
          </Text>
        </Card>
      </>
  )
}

export default TotalExpense;