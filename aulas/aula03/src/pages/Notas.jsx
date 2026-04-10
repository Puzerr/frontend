import Layout from "./Layout.jsx";
import Tabela from "../components/Tabela.jsx"

function Notas() {
  return (
    <Layout titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
      <Tabela />
    </Layout>
  );
}

export default Notas;
