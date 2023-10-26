import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
const [accountBalance, setAccountBalance] = useState(0);

  return (
    <UserContext.Provider value={{ accountBalance, setAccountBalance }}>
      {children}
    </UserContext.Provider>
  );
};

