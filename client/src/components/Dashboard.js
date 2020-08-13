import React, { useEffect } from 'react';
import DashboardLayout from './layout/Dashboard/DashboardLayout';

import TotalDepositAmount from './Deposit/TotalDepositAmount';
import TotalExpense from './Expenses/TotalExpense'

import { Row, Col } from 'antd';

const Dashboard = () => {
  //const authContext = useContext(AuthContext);

  useEffect(() => {
    // Load user method will here
    // console.log('Load user ran')
    // authContext.loadUser();
    // eslint-disable-next-line
  },[]);

  return (
    <DashboardLayout>
      <Row>
        <Col span={4}><TotalExpense/></Col>
        <Col span={4}><TotalDepositAmount/></Col>
      </Row>
    </DashboardLayout>
  )
}

export default Dashboard;