import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

function Login() {
  const { login } = useContext(AuthContext);

  const handleEntrar = () => {
    login({usuario:"raphael.ferraz@iesb.edu.br", senha:"12345678"});
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>En/trar</button>
    </>
  );
}

export default Login;
