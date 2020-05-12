import React from 'react'
import Navbar from './layout/Navbar/Navbar'
import { Layout } from 'antd';


const { Content, Footer } = Layout;

export const Home = (props) => {
  return (
    <div>
      <Navbar/>
      <Content className="site-layout" style={{ padding: '15px' }}>

      <div className="site-layout-background" align='center' style={{ padding: 24, minHeight: 380 }}>
      
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Abdullah Naser</Footer>
    </div>
  )
}
