import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css';

import {  Menu } from 'antd';
import { IdcardFilled,MessageFilled, HomeFilled,InfoCircleFilled, LockFilled } from '@ant-design/icons';
const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState('home')
  return (
    <Menu style={{fontSize: '15px'}} align='center' onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">

      <Menu.Item key="home" icon={<HomeFilled/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>


      <Menu.Item key="login" icon={<LockFilled />}>
        <Link to='/login'>Login</Link>
      </Menu.Item>


      <Menu.Item key="register" icon={<IdcardFilled/>}>
        <Link to='/register'>Register</Link>
      </Menu.Item>


      <Menu.Item icon={<InfoCircleFilled />} key="about">
        <Link to='/about'>About</Link>
      </Menu.Item>

      <Menu.Item icon={<MessageFilled />} key="contact">
        <Link to='/contact'>Contact us</Link>
      </Menu.Item>

    </Menu>
  )
}

export default Navbar;