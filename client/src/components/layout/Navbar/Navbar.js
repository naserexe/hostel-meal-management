import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css';

import {  Menu } from 'antd';
import { IdcardFilled,MessageFilled, HomeFilled,InfoCircleFilled, MediumCircleFilled  } from '@ant-design/icons';
const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState('home')
  return (
    <Menu style={{fontSize: '15px'}} align='center' onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">

      <Menu.Item key="home" icon={<HomeFilled/>}>
        <Link to='/'>Home</Link>
      </Menu.Item>

      <SubMenu icon={<MediumCircleFilled />} title="Manager">
        <Menu.ItemGroup title="Authentication">
          <Menu.Item  key="m_login"><Link to='/manager/login'>Login</Link></Menu.Item>
          <Menu.Item key="m_register"><Link to='/manager/register'>Register</Link></Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <SubMenu icon={< IdcardFilled />} title="Boarder">
          <Menu.ItemGroup title="Authentication">
            <Menu.Item key="b_login"><Link to='/boarder/login'>Login</Link></Menu.Item>
            <Menu.Item key="b_register"><Link to='/boarder/register'>Register</Link></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

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