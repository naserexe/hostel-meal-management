import React, {useState} from 'react';

import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';

const Register = () => {

  const [name, setName] = useState('asdd');
  const [email, setEmail] = useState('fsadf');
  const [hostelName, setHostelName] = useState('asdfsdf');
  const [password, setPassword] = useState('sadfdsf');

  const onSubmit = () => {
    console.log({name, email, hostelName, password})
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
              message: 'Please input your name!',
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
              message: 'Please input your email!',
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
              message: 'Please input your hostel name!',
            },
          ]}
        >
          <Input onChange={(e) => setHostelName(e.target.value)} name='hostel_name' value={hostelName} prefix={<HomeOutlined  className="site-form-item-icon" />} placeholder="Hostel name" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              min:6,
              required: true,
              message: 'Password should be more than 6 character!',
            },
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