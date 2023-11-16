import React from 'react';

function ConfirmModal() {
  return (
    <div className="confirm-modal">
      <p>Are you sure you want to continue?</p>
      <button className="confirm-button">Yes</button>
      <button className="cancel-button">No</button>
    </div>
  );
}

export default ConfirmModal;
