import React from 'react';
import './NotificationList.css';
import NotificationItem from './NotificationItem';

function NotificationList() {
  return (
    <div className="notification-list-container">
      {/* Add your logic and JSX code for the NotificationList component here */}
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </div>
  );
}

export default NotificationList;
