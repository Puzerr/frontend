import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import autenticar from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = async (dados) => {
    const response = await autenticar(dados);
    if (response?.token) {
      setUsuario(response);
      setLogado(true);
      return;
    }

    throw new Error("Error 401: Credenciais incorretas");
    
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthContext, AuthProvider };
