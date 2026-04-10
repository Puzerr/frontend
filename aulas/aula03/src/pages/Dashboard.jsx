import Layout from "./Layout.jsx";
import Card from "../components/Card.jsx";

function Dashboard() {
  const avisos = ["Eleição para representantes", "Participate do IESB"];

  const data = [
    "23/04 - Avaliação P1",
    "04/05 - Transferência de curso",
    "07/06 - Renovação de matrícula",
  ];

  const disciplinas = [
    "Construção de Frontend",
    "Devops",
    "BI e Data Warehousing",
  ];

  return (
    <Layout titulo="Olá, Aluno" subtitulo="Bem-vindo ao portal do aluno">
      <Card titulo="Mural de Avisos" items={avisos} />
      <Card titulo="Calendário Acadêmico" items={data} />
      <Card titulo="Minhas Disciplinas" items={disciplinas} />
    </Layout>
  );
}

export default Dashboard;
