import { useState } from "react";
import InputEmail from "../components/InputEmail.jsx";
import InputSenha from "../components/InputSenha.jsx";
import BotaoSubmit from "../components/BotaoSubmit.jsx";
import logo from "../assets/learn.svg";

function FormLogin({ titulo, imagem }) {
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState();
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState();

  function trataSubmit(e) {
    e.preventDefault();
    if (!email) setEmailErro("O campo de email é obrigatório.");
    if (!senha) setSenhaErro("O campo de senha é obrigatório");
  }

  const mudaEmail = (e) => {
    setEmailErro();
    setEmail(e.target.value);
  };

  const mudaSenha = (e) => {
    setSenhaErro();
    setSenha(e.target.value);
  };

  return (
    <form
      onSubmit={trataSubmit}
      className="flex flex-col m-auto px-3 py-8 w-md border-2 border-gray-300 rounded-md"
    >
      {imagem && (
        <img src={logo} alt="Imagem da logo" className="w-32 m-auto" />
      )}
      <h1 className="text-center mb-4 font-bold">{titulo}</h1>
      <InputEmail valor={email} erro={emailErro} mudaValor={mudaEmail} />
      <InputSenha valor={senha} erro={senhaErro} mudaValor={mudaSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
