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
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
      <TotalDepositAmount/>
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
      <TotalExpense/>
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
      <TotalMeal/>
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
      <MealRate/>
      </Col>
    </Row>
    </DashboardLayout>
  )
}

export default Dashboard;