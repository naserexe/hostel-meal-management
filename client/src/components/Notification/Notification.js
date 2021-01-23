import React from 'react'
import { notification } from 'antd';

const Notification = ({ message, type, desc }) => {
  const openNotificationWithIcon = type => {
    notification[type]({
      message,
      description: desc ? desc : null,
    });
  };
  if(message){
    openNotificationWithIcon(type)
  }
  
  return (
    <div/>
  )
}

export default Notification;
