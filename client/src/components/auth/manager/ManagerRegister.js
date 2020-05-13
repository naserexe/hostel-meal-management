import React, {useState, useContext} from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';

import AuthContext from '../../context/auth/authContext'

const Register = () => {

  const authContext = useContext(AuthContext);
  const { register } = authContext;

  const [name, setName] = useState('asdd');
  const [email, setEmail] = useState('fsadf');
  const [hostelName, setHostelName] = useState('asdfsdf');
  const [password, setPassword] = useState('sadfdsf');

  const validateMessages = {
    required: `${name} is required`,
    pattern: `${name} pattern error`
  }

  const onSubmit = () => {
    register({name, email, hostelName, password})
  }

  return (
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
          name="username"
          rules={[
            {
              min:4,
              required: true,
              message: 'Username should be at least 4 character'
            },
          ]}
          value={name}
        >
          <Input onChange={(e) => setName(e.target.value)} name='name' value={name} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Email is required'
            },
            {
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid Email'
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="hostel_name"
          rules={[
            {
              
              required: true,
              message: 'Hostel name is required',
            },
            {
              min: 4,
              message: 'Minimum 4 character'
            },
            {
              pattern: /^[a-zA-Z0-9\-]+$/,
              message: 'Your hostel name is not valid. Only characters A-Z, a-z, 0-9 and - are acceptable.'
            }
          ]}
        >
          <Input onChange={(e) => setHostelName(e.target.value)} name='hostel_name' value={hostelName} prefix={<HomeOutlined  className="site-form-item-icon" />} placeholder="Hostel name" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              
              required: true,
              message: 'Password is required',
            },
            {
              min:6,
              message: 'Password should be more than 6 character'
            }
          ]}
        >
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name='password'
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
          Or <a href="!#">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register;