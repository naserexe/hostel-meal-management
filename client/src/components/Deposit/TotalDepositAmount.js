import React, { useContext, useEffect } from 'react'
import { Card, Typography} from 'antd';

import DepositContext from '../context/deposit/depositContext'

const { Text } = Typography;

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