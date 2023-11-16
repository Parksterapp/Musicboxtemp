import React from 'react';
import './NotificationActions.css';
import MarkAsReadButton from './MarkAsReadButton';
import DeleteNotificationButton from './DeleteNotificationButton';

function NotificationActions() {
  return (
    <div className="notification-actions-container">
      {/* Add your logic and JSX code for the NotificationActions component here */}
      <MarkAsReadButton />
      <DeleteNotificationButton />
    </div>
  );
}

export default NotificationActions;
