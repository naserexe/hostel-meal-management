import React, { useContext, useEffect } from 'react'
import { Card, Typography} from 'antd';

import DepositContext from '../context/deposit/depositContext';

import { currencyFormat } from '../../utils/currencyFormat'

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
        <Card title="Total Deposited Amount" loading={totalDepositAmount === null ? true : false}>
          <Text style={{fontSize:'30px', color:'#49aa19'}} level={2} strong={true} type="warning">
            {totalDepositAmount >=0 ? currencyFormat(Number(totalDepositAmount)) : 'Loading...'}
          </Text>
        </Card>
      </>
  )
}

export default TotalDepositAmount;