import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      {/* Add more profile information here */}
    </div>
  );
};

export default Profile;
