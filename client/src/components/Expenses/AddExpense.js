import React, {useState, useEffect,  useContext} from 'react';
import { withRouter} from 'react-router-dom'

import { Form, Input, Button, Select } from 'antd';
import DashboardLayout from '../layout/Dashboard/DashboardLayout'

import Notification from '../Notification/Notification'

import ExpenseContext from '../context/expense/expenseContext'
import BoarderContext from '../context/boarder/boarderContext'

const AddExpense = (props) => {
  // const [form] = Form.useForm();

  const boarderContext = useContext(BoarderContext);
  const { getAllBoarder, boarders } = boarderContext;

  const expenseContext = useContext(ExpenseContext);
  const { addExpense, notification } = expenseContext;

  useEffect(() => {
    getAllBoarder();
    // eslint-disable-next-line
  }, [])

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');
  const [marketer, setMarketer] = useState('');


  const onSubmit = () => {
    addExpense({name, type, cost, marketer})

  }

  const boarder = boarders.map(boarder => {
    return {
      label: boarder.name,
      value: boarder._id
    }
  })

  return (
    <DashboardLayout>
      <Notification message={notification ? 'Expense added successfully': false} type='success'/>
      <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="Expenses name"
          rules={[
            {
              min:4,
              required: true,
              message: 'Expense name should be at least 4 character'
            },
          ]}
        >
          <Input onChange={(e) => setName(e.target.value)} name='name' value={name}  placeholder="Expense name" />
        </Form.Item>

        <Form.Item
          name="Type"
          rules={[
            {
              min:4,
              required: true,
              message: 'Type name should be at least 4 character'
            },
          ]}
        >
          <Input onChange={(e) => setType(e.target.value)} name='name' value={type} placeholder="Type" />
        </Form.Item>

        <Form.Item
          name="Cost"
          rules={[
            {
              min:1,
              required: true,
              message: 'Cost name should be at least 1 Number'
            },
            {
              // eslint-disable-next-line
              pattern: /^(0|[1-9][0-9]*)$/,
              message: 'Input should be number'
            },
          ]}
        >
          <Input onChange={(e) => setCost(e.target.value)} name='cost' value={cost}  placeholder="Cost" />
        </Form.Item>

        <Form.Item
          name="role"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select Marketer"
            onChange={value => setMarketer(value)}
            options={boarder}
            allowClear
          />
            
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
    </DashboardLayout>
  )
}

export default withRouter(AddExpense);