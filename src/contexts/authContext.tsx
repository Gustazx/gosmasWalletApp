import { createContext, useCallback, useContext, useState } from "react";

interface IAuthContext {
  signIn: (email: string, password: string) => void;
  logout: () => void;
  authState: "valido" | "invalido" | null;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthProviderProps) => {
  const [authState, setAuthState] = useState<"valido" | "invalido" | null>(
    null
  );

  const signIn = useCallback(async (email: string, password: string) => {
    if (email === "a" && password === "a") {
      setAuthState("valido");
      console.log(authState);
    }
  }, []);

  const logout = () => {
    setAuthState(null);
  };

  return (
    <AuthContext.Provider value={{ authState, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): IAuthContext => useContext(AuthContext);
