import React, { useState, useEffect,  useContext } from 'react'
import { Form, Input, Button, Select } from 'antd';
import DashboardLayout from '../layout/Dashboard/DashboardLayout'

import BoarderContext from '../context/boarder/boarderContext';
import MealContext from '../context/meal/mealContext';


const AddMeal = () => {
  const boarderContext = useContext(BoarderContext);
  const { getAllBoarder, boarders } = boarderContext;

  const mealContext = useContext(MealContext);
  const { addMeal } = mealContext;

  const [mealCount, setMealCount] = useState('');
  const [user_id, setUser_id] = useState('')

  
  useEffect(() => {
    getAllBoarder();
    // eslint-disable-next-line
}, [])

  const boarder = boarders.map(boarder => {
    return {
      label: boarder.name,
      value: boarder._id
    }
  });

const onSubmit = () => {
    addMeal({mealCount, user_id})
}

  return (
    <DashboardLayout>
      <h1>Add Meal</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
          remember: true,
          }}
          onFinish={onSubmit}
          >


          <Form.Item
          name="depositAmount"
          rules={[
              {
              min:1,
              required: true,
              message: 'Meal count should be at least 1 Number'
              },
          ]}
          >
          <Input onChange={(e) => setMealCount(e.target.value)} name='mealCount' value={mealCount}  placeholder="Meal Number" />
          </Form.Item>

          <Form.Item
          name="user"
          rules={[
              {
              required: true,
              },
          ]}
          >
          <Select
            placeholder="Select Boarder to add meal"
            onChange={value => setUser_id(value)}
            options={boarder}
            allowClear
          />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Add Meal
            </Button>
          </Form.Item>
        </Form>
    </DashboardLayout>
  )
}

export default AddMeal;