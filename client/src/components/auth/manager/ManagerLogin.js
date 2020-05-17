import React, { useState, useContext, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import AuthContext from '../../context/auth/authContext'

import './style.css';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/');
    }
  })

  const onSubmit = () => {
    login({email, password})
  }
  return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} value={email} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/manager/register">Register now!</Link>
        </Form.Item>
      </Form>
  )
}

export default withRouter(Login);