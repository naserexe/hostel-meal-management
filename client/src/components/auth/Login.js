import React, { useState, useContext, useEffect, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext'

import Notification from '../Notification/Notification'

import './style.css';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  const authContext = useContext(AuthContext);

  const { login, isAuthenticated, loadUser, error } = authContext;


  useEffect(() => {
    loadUser();
    if(isAuthenticated){
      props.history.push('/dashboard');
    }
    // eslint-disable-next-line
  },[isAuthenticated])

  const onSubmit = () => {
    login({email, password})
    
  }

  return (
    <Fragment>
      <Notification message={error} type='error' desc='Incorrect email or password!'/>
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
            {
              // eslint-disable-next-line
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid Email'
            },
          ]}
        >
          <Input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Email"
          />
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
          Or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </Fragment>
  )
}

export default withRouter(Login);