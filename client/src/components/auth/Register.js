import React, {useState, useContext, useEffect} from 'react';
import { withRouter, Link} from 'react-router-dom'

import { Form, Input, Button, Select, notification } from 'antd';

import { UserOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';

import AuthContext from '../context/auth/authContext'

const { Option } = Select;
const Register = (props) => {

  const authContext = useContext(AuthContext);
  const { register, isAuthenticated,loadUser, error } = authContext;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    loadUser()
    if(isAuthenticated){
      props.history.push('/');
    }
    // eslint-disable-next-line
  },[isAuthenticated])

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Authentication Error',
      description: error,
    });
  };


  const onSubmit = () => {
    register({name, email, password, hostelName, role});
    if (error != null) {
      openNotificationWithIcon('error');
    }
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
              // eslint-disable-next-line
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Invalid Email'
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)} name='email' value={email} prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="role"
          rules={[
            {
              required: true,
              message: 'Please select your role'
            },
          ]}
        >
          <Select
            placeholder="Select Role"
            onChange={value => setRole(value)}
            allowClear
          >
            <Option value="manager">Manager</Option>
            <Option value="boarder">Boarder</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="hostel_name"
          rules={[
            {
              
              required: true,
              message: 'Hostel name is required',
            },
            {
              min: 5,
              message: 'Minimum  character'
            },
            {
              // eslint-disable-next-line
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
            Register
          </Button>
          Or <Link to="/login">Login now!</Link>
        </Form.Item>
      </Form>
    </div>
  )
}

export default withRouter(Register);