import React from 'react';
import './NotificationSettings.css';
import NotificationPreference from './NotificationPreference';

function NotificationSettings() {
  return (
    <div className="notification-settings-container">
      {/* Add your logic and JSX code for the NotificationSettings component here */}
      <NotificationPreference />
      <NotificationPreference />
      <NotificationPreference />
    </div>
  );
}

export default NotificationSettings;
