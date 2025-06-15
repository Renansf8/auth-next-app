"use client";

import { User } from "@/entities/User";
import { createContext, useContext } from "react";

interface IAuthContextValue {
  user: User;
}

const AuthContext = createContext({} as IAuthContextValue);

interface IAuthProviderProps {
  children: React.ReactNode;
  user: User;
}

export function AuthProvider({ children, user }: IAuthProviderProps) {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const contextValue = useContext(AuthContext);

  if (!contextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return contextValue;
}
