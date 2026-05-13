import { useNavigate } from "react-router";
import { useAuthContext } from "../contexts/AuthContext.jsx";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleEntrar = () => {
    login({ usuario: "raphael.ferraz@iesb.edu.br", senha: "12345678" });
    navigate("/");
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;
