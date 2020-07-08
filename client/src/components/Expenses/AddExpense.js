import React, {useState, useContext, useEffect} from 'react';
import { withRouter, Link} from 'react-router-dom'

import { Form, Input, Button, Select } from 'antd';
import DashboardLayout from '../layout/Dashboard/DashboardLayout'

import ExpenseContext from '../context/expense/expenseContext'

const { Option } = Select;
const AddExpense = (props) => {

  const expenseContext = useContext(ExpenseContext);
  const { addExpense, getExpenses } = expenseContext;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');
  const [marketer, setMarketer] = useState('');


  const onSubmit = () => {
    addExpense({name, type, cost})
  }

  return (
    <DashboardLayout>
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
          ]}
        >
          <Input onChange={(e) => setCost(e.target.value)} name='name' value={cost}  placeholder="Cost" />
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
            allowClear
          >
            <Option value="manager">Manager</Option>
            <Option value="boarder">Boarder</Option>
          </Select>
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