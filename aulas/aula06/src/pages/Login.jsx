import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { login } = useAuthContext();
  const [erro, setErro] = useState();
  const navigate = useNavigate();

  const entrar = async (dados) => {
    try {
      await login(dados);
      reset();
      setErro("");
      navigate("/produtos");
    } catch (e) {
      setErro(e.message);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <p>{erro}</p>
      <form onSubmit={handleSubmit(entrar)}>
        <input type="email" placeholder="E-mail" {...register("email")} />
        <input type="senha" placeholder="Senha" {...register("senha")} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
