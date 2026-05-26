import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [autenticado, setAutenticado] = useState(false);

  const login = () => {
    setUsuario({ id: 0, name: "Raphael", curso: "ads" });
    setAutenticado(true);
  };

  const logout = () => {
    setUsuario({});
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
