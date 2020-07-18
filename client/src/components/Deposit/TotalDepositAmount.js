import React, { useContext, useEffect, Fragment } from 'react'
import { Card, Typography, Space} from 'antd';

import DepositContext from '../context/deposit/depositContext'

import DashboardLayout from '../layout/Dashboard/DashboardLayout'


const { Text, Link } = Typography;

const TotalDepositAmount = () => {
  const depositContext = useContext(DepositContext);

  const { getTotalDepositedAmount, totalDepositAmount } = depositContext;

  useEffect(() => {
    getTotalDepositedAmount();
    // eslint-disable-next-line
  }, [])
  return (
      <>
        <Card title="Total Diposited Amount" style={{ width: 300, textAlign: 'center' }}>
          <Text style={{fontSize:'50px'}} level={2} strong={true} type="warning">{totalDepositAmount ? totalDepositAmount : 'Loading...'}</Text>
        </Card>
      </>
  )
}

export default TotalDepositAmount;