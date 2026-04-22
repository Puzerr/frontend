import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";

function Dashboard() {
  const data = {
    card1: {
      titulo: "Mural de avisos",
      conteudo: [
        "Inscrição para o projeto de extensão",
        "Eleição para representante de turma",
      ],
    },
    card2: {
      titulo: "Calendário Acadêmico",
      conteudo: [
        "23/02 - Início do período letivo 2026-1",
        "25/04 - Prazo final para aplicação da P1",
        "23/06 - Prazo final para aplicação da P2",
        "04/07 - Fim do período letivo 2026-1",
      ],
    },
    card3: {
      titulo: "Minhas Disciplinas",
      conteudo: [
        "Manutenção de Software e DevOps",
        "Construção Frontend",
        "Governança de TI",
        "Business Intelligence e Data Warehousing",
      ],
    },
  };

  return (
    <>
      <Header titulo="Olá, Aluno!" subtitulo="Bem-vindo ao portal do aluno" />
      <Section tipo="card" items={Object.values(data)} />
    </>
  );
}

export default Dashboard;
