import React, { useContext, useEffect } from 'react'
import { Card, Typography, Space} from 'antd';

import ExpenseContext from '../context/expense/expenseContext'

import DashboardLayout from '../layout/Dashboard/DashboardLayout'


const { Text, Link } = Typography;

const TotalExpense = () => {
  const expenseContext = useContext(ExpenseContext);

  const { getTotalExpenseCost, totalExpenseCost } = expenseContext;

  useEffect(() => {
    getTotalExpenseCost();
    // eslint-disable-next-line
  }, [])
  return (
      <>
        <Card title="Total Expense" style={{ width: 200, textAlign: 'center' }}>
          <Text style={{fontSize:'50px'}} level={2} strong={true} type="warning">{totalExpenseCost ? totalExpenseCost : 'Loading...'}</Text>
        </Card>
      </>
 
  )
}

export default TotalExpense;