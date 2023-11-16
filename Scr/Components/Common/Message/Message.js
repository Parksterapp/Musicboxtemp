import React from 'react';
import './Message.css'; // Import your CSS file

const Message = ({ text, type }) => {
  return (
    <div className={`message ${type}`}>
      {text}
    </div>
  );
};

export default Message;
                    
