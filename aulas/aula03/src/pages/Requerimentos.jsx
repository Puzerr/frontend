import Layout from "./Layout";
import Tabela from "../components/Tabela";

function Requerimentos() {
  return (
    <Layout
      titulo="Meus requerimentos"
      subtitlo="Faça solicitações online para a secretaria"
    >
      <Tabela />
    </Layout>
  );
}

export default Requerimentos;
