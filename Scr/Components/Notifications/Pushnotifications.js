import React from 'react';
import './PushNotifications.css';
import PushNotificationItem from './PushNotificationItem';
import PushNotificationSettings from './PushNotificationSettings';

function PushNotifications() {
  return (
    <div className="push-notifications-container">
      {/* Add your logic and JSX code for the PushNotifications component here */}
      <PushNotificationItem />
      <PushNotificationItem />
      <PushNotificationSettings />
    </div>
  );
}

export default PushNotifications;
