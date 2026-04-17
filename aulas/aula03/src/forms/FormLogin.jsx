import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../pages/BotaoSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senha, setSenha] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();
    if (!matricula) {
      setMatriculaErro("Matricula é obrigatório");
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatório");
    }
  };

  const mudaMatricula = (e) => {
    setMatriculaErro()
    setMatricula(e.target.value);
  };

  const mudaSenha = (e) => {
    setSenhaErro();
    setSenha(e.target.value);
  };

  return (
    <form onSubmit={trataSubmit}>
      <InputMatricula
        valor={matricula}
        erro={matriculaErro}
        mudaValor={mudaMatricula}
      />
      <InputSenha valor={senha} erro={senhaErro} mudaValor={mudaSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
