import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    setUsuario({ id: 0, nome: "Raphael", email: "raphael@iesb.edu.br" });
    setLogado(true);
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

export { useAuthContext, AuthContext ,AuthProvider };
