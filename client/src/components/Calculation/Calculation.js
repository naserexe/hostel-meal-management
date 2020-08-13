import React, { useContext, useEffect } from 'react'
import { Table } from 'antd';

import DashboardLayout from '../layout/Dashboard/DashboardLayout';

import CalculationContext from '../context/calculation/calculationContext';


const Calculation = () => {
  const calculationContext = useContext(CalculationContext);
  const { calculation, getCalculation} = calculationContext;

  useEffect(() => {
    getCalculation();
    // eslint-disable-next-line
  },[]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Total Meal',
      dataIndex: 'totalMeal',
      key: 'totalMeal'
    },
    {
      title: 'Meal Rate',
      dataIndex: 'mealRate',
      key: 'mealRate'
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      key: 'totalCost',
    },
    {
      title: 'Deposit Amount',
      dataIndex: 'depositAmount',
      key: 'depositAmount'
    },
    {
      title: 'Due or Return',
      dataIndex: 'dueOrGetReturn',
      key: 'dueOrGetReturn'
    },
    
  ]

  return (
    <div>
      <DashboardLayout>
      <Table dataSource={calculation} columns={columns} />
      </DashboardLayout>
    </div>
  )
}

export default Calculation;