import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";

function Faltas() {
  const data = {  
    0: ["Disciplina", "Total de Faltas", "% de Presença"],
    1: {
      periodo: ["2026.1"],
      dados: [
        ["BI e Data Warehousing", "0", "100%"],
        ["Construção Frontend", "0", "100%"],
        ["Manutenção de Software e DevOps", "0", "100%"],
      ],
    },
    2: {
      periodo: ["2025.2"],
      dados: [
        ["Estrutura de Dados", "0", "100%"],
        ["Construção Backend", "0", "100%"],
        ["Gerenciamento de Projeto", "0", "100%"],
      ],
    },
  };
  return (
    <>
      <Header
        titulo="Minhas Faltas"
        subtitulo="Histórico de faltas por semestre"
      />
      <Section tipo="tabela" items={Object.values(data)}/>
    </>
  );
}

export default Faltas;
