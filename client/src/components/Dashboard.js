import React, { useEffect } from 'react';
import DashboardLayout from './layout/Dashboard/DashboardLayout';

import TotalDepositAmount from './Deposit/TotalDepositAmount';
import TotalExpense from './Expenses/TotalExpense';
import TotalMeal from './Meal/TotalMeal';
import MealRate from './Calculation/MealRate';

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
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <TotalDepositAmount/>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <TotalExpense/>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <TotalMeal/>
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      <MealRate/>
      </Col>
    </Row>
    </DashboardLayout>
  )
}

export default Dashboard;