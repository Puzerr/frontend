import Tabela from "../components/Tabela.jsx";
import Layout from "./Layout.jsx";

function Faltas() {
  return (
    <Layout tituo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Faltas;
