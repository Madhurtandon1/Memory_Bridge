import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  getCurrentUser,
} from "../services/auth.api";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    if (!token) {

      setLoading(false);

      return;
    }

    const loadUser =
      async () => {

        try {

          const res =
            await getCurrentUser();

          setUser(
            res.data
          );

        } catch {

          localStorage.removeItem(
            "accessToken"
          );

          setUser(null);

        } finally {

          setLoading(false);
        }
      };

    loadUser();

  }, []);

  const login = (
    user,
    accessToken
  ) => {

    localStorage.setItem(
      "accessToken",
      accessToken
    );

    setUser(user);
  };

  const logout = () => {

    localStorage.removeItem(
      "accessToken"
    );

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);