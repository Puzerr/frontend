import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";

function Notas() {
  const data = {
    0: ["Disciplina", "A1", "A2", "A3", "Menção"],
    1: {
      periodo: ["2026.1"],
      dados: [
        ["BI e Data Warehousing", null, null, null, "SR"],
        ["Construção Frontend", null, null, null, "SR"],
        ["Manutenção de Software e DevOps", null, null, null, "SR"],
      ],
    },
    2: {
      periodo: ["2025.2"],
      dados: [
        ["Estrutura de Dados", "5.4", "6.2", null, "MM"],
        ["Construção Backend", "6.3", "6.1", null, "MM"],
        ["Gerenciamento de Projeto", "7.4", "7.1", null, "MS"],
      ],
    },
    3: {
      periodo: ["2025.1"],
      dados: [
        ["Banco de Dados SQL e NoSQL", "9.8", "10", null, "SS"],
        ["Lógica de Programação", "8.3", "9.1", null, "MS"],
        ["Projeto de Interface", "8.4", "9.2", null, "MS"],
      ],
    },
  };
  return (
    <>
      <Header
        titulo="Minhas Notas"
        subtitulo="Histórico de Notas por Semestre"
      />
      <Section tipo="tabela" items={Object.values(data)} />
    </>
  );
}

export default Notas;
