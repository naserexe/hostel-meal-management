import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import { Layout, Menu, Button, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DollarCircleFilled,
    BankOutlined,
    MedicineBoxFilled,
    ReadFilled,
    DashboardFilled,
    ControlOutlined,
    PercentageOutlined,
    CoffeeOutlined,
    PoweroffOutlined
} from '@ant-design/icons';

import './DashboardLayout.css';

import AuthContext from '../../context/auth/authContext';


const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;


const Dashboard = (props) => {
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggle = () => {
        setSidebarToggle(!sidebarToggle)
    }

    const authContext = useContext(AuthContext);

    const {  logout } = authContext;

    const handleLogOut = () => {
      logout();
    }

    return (
        <Layout>
        <Sider trigger={null} collapsible collapsed={sidebarToggle}
        style={{
          overflow: 'auto',
          height: '100vh',
          left: 0,
        }}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" >

          <Menu.Item key="0" icon={<DashboardFilled />}>
              <Link style={{color: 'white'}} to='/dashboard'>Dashboard</Link>
            </Menu.Item>

            <SubMenu key="expense" icon={<DollarCircleFilled />} title="Expenses">
              <Menu.Item key="1" icon={<MedicineBoxFilled />}>
                <Link style={{color: 'white'}} to='/expense/add'>Add Expense</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<ReadFilled />}>
                <Link style={{color: 'white'}} to='/expense/view'>View All Expenses</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="meal" icon={<CoffeeOutlined />} title="Meal">
              <Menu.Item key="1" icon={<MedicineBoxFilled />}>
                <Link style={{color: 'white'}} to='/meal/add'>Add Meal</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<ReadFilled />}>
                <Link style={{color: 'white'}} to='/meal/view'>View Meal Chart</Link>
              </Menu.Item>

              <Menu.Item key="4" icon={<ReadFilled />}>
                <Link style={{color: 'white'}} to='/meal/boarder'>Boarder Meal</Link>
              </Menu.Item>
            </SubMenu>


            <Menu.Item key="2" icon={<BankOutlined />}>
              <Link style={{color: 'white'}} to='/deposit'>Deposit Money</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<PercentageOutlined />}>
              <Link style={{color: 'white'}} to='/calculation'>Calculation</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<ControlOutlined />}>
              <Link style={{color: 'white'}} to='/advance'>Advanced option</Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Row>
              <Col flex="1 1 100px">{React.createElement(sidebarToggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}</Col>
              <Col flex="0 1 150px"><Button type='default' orientation="right" onClick={handleLogOut} danger icon={<PoweroffOutlined />}>Logout</Button></Col>
            </Row>
            
            
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
            {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Abdullah Naser</Footer>
        </Layout>
      </Layout>
    )
}

export default Dashboard;