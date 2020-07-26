import React, { useContext, useEffect } from 'react'
import DashboardLayout from '../layout/Dashboard/DashboardLayout'

import MealContext from '../context/meal/mealContext'

import { Table, Tag, Space } from 'antd';

export const MealChart = () => {
  const mealContext = useContext(MealContext);
  const { getAllMealList, allMeal } = mealContext;

  useEffect(() => {
    getAllMealList();
    // eslint-disable-next-line
  },[]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Meal',
      dataIndex: 'meal',
      key: 'meal',
    },
    {
      title: 'Date Added',
      dataIndex: 'dateAdded',
      key: 'dateAdded',
    },
  ];

  const dataSource = allMeal.map(singleMeal => {
    return {
      name: singleMeal.name,
      meal: singleMeal.meal.map(m => (<p>{m.mealCount}</p>)),
      dateAdded: singleMeal.meal.map(m => (<p>{m.dateAdded}</p>))
    }
  })

  return (
    <DashboardLayout>
      <h1>Meal Chart</h1>
      <Table dataSource={dataSource} tableLayout='auto' pagination={{ pageSize: 1 }} scroll={{ y: 650 }} columns={columns} />
    </DashboardLayout>
  )
}
