"use client";

import React, { createContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  const user = {
    id: "testId",
    email: "test@mail.com",
    name: "Julian Roberts",
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
