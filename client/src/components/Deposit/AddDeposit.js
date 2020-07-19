import React, { useState, useEffect,  useContext } from 'react'
import { Form, Input, Button, Select } from 'antd';
import DashboardLayout from '../layout/Dashboard/DashboardLayout'

import BoarderContext from '../context/boarder/boarderContext';
import DipositContext from '../context/deposit/depositContext'

 const AddDeposit = () => {
    const boarderContext = useContext(BoarderContext);
    const { getAllBoarder, boarders } = boarderContext;

    const dipositContext = useContext(DipositContext);
    const { addDeposit } = dipositContext;

    useEffect(() => {
        getAllBoarder();
        // eslint-disable-next-line
      }, [])

     const [depositAmount, setDepositAmount] = useState('');
     const [user_id, setUser_id] = useState('')

     const boarder = boarders.map(boarder => {
        return {
          label: boarder.name,
          value: boarder._id
        }
      });

    const onSubmit = () => {
        addDeposit({depositAmount, user_id})
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
                    name="depositAmount"
                    rules={[
                        {
                        min:2,
                        required: true,
                        message: 'Deposit amount should be at least 2 Number'
                        },
                    ]}
                    >
                    <Input onChange={(e) => setDepositAmount(e.target.value)} name='name' value={depositAmount}  placeholder="depositAmount" />
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
                        placeholder="Select Boarder to deposit"
                        onChange={value => setUser_id(value)}
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
export default AddDeposit;