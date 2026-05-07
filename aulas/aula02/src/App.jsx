import "./App.css";
import logo from "./assets/learn.svg"

function Cabecalho(){
  return (
    <header>
      <h1>Título</h1>
    </header>
  );
};

function App() {
  {
  // <div>
  //   <Cabecalho />
  //   <div>{1+2+3+4+5+6+7+8+9}</div>
  //   <img src={logo} alt="Não sei descrever isso (é default do react)"/>
  // </div>
  }

  return (
    <main>
      <img src={logo} alt="ícone de um chapéu de formatura vermelho"/>
      <h1>Aluno On-line</h1>
      <label htmlFor="matricula">Matrícula</label>
      <input type="number" name="matricula" id="matricula" placeholder="Digite aqui"/>
      <p id="matriculaErro"></p>

      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" placeholder="Digite aqui"/>
      <p id="senhaErro"></p>

      <button type="submit">Entrar</button>
    </main>
  );
};

export default App;
