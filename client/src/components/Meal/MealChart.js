import React, { useContext, useEffect } from 'react';
import moment from 'moment'
import DashboardLayout from '../layout/Dashboard/DashboardLayout';
import Notification from '../Notification/Notification'

import MealContext from '../context/meal/mealContext'

import { Table } from 'antd';

export const MealChart = () => {
  const mealContext = useContext(MealContext);
  const { getAllMealList, allMeal, error } = mealContext;

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
      dateAdded: singleMeal.meal.map(m => (<p>{moment(m.dateAdded ).format('Do MMMM YYYY, h:mm:ss a')}</p>))
    }
  })

  return (
    <DashboardLayout>
      <Notification message={error ? error : false} type='warning'/>
      <h1>Meal Chart</h1>
      <Table dataSource={dataSource} tableLayout='auto' pagination={{ pageSize: 1 }} scroll={{ y: 650 }} columns={columns} />
    </DashboardLayout>
  )
}
