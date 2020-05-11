import React from 'react'
import Navbar from './layout/Navbar/Navbar'
import { Layout } from 'antd';

const { Content, Footer } = Layout;

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Content className="site-layout" style={{ padding: '15px' }}>

      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Abdullah Naser</Footer>
    </div>
  )
}
