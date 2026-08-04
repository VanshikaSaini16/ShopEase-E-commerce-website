import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("shopease-token");
  });
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;
    const storedUser = window.localStorage.getItem("shopease-user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("shopease-token", token);
    } else {
      window.localStorage.removeItem("shopease-token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("shopease-user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("shopease-user");
    }
  }, [user]);

  const login = async ({ username, password }) => {
    const data = await loginUser({ username, password });
    setToken(data.token);
    setUser({ username });
    return data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const isLoggedIn = Boolean(token);

  const value = useMemo(
    () => ({ token, user, isLoggedIn, login, logout }),
    [token, user, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
