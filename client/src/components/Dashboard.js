import React, { useEffect, useContext } from 'react';
import DashboardLayout from './layout/Dashboard/DashboardLayout';

import AuthContext from './context/auth/authContext';

const Dashboard = (props) => {
  //const authContext = useContext(AuthContext);

  useEffect(() => {
    // Load user method will here
    // console.log('Load user ran')
    // authContext.loadUser();
    // eslint-disable-next-line
  },[]);

  return (
    <DashboardLayout>
      {props.children}
    </DashboardLayout>
  )
}

export default Dashboard;