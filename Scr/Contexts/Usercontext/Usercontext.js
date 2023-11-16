import React, { createContext, useState } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a UserProvider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You can set the initial user state here

  // You can define functions or data to be shared with consumers of this context

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
