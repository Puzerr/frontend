import { Link, Links } from "react-router";
import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import RequerimentoForm from "../forms/RequerimentoForm.jsx";

function Requerimentos() {
  const data = {
    0: ["Tipo de Requerimento", "Data da Solicitação", "Situação"],
    1: {
      dados: [
        ["Revisão de Menção", "15/12/2025", "Indeferido"],
        ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
        ["Trancamento de Matrícula", "05/01/2024", "Deferido"],
        ["Mudança de Turno", "10/10/2023", "Deferido"],
        ["Renovação de Matrícula", "20/02/2023", "Deferido"],
      ],
    },
  };
  return (
    <>
      <Header
        titulo="Meus requerimentos"
        subtitulo="Faça solicitações online para a secretaria"
      />
      <Section tipo="tabela" items={Object.values(data)} />
      <Link to={"novo-requerimento"}>
        <h2 className="font-bold cursor-pointer">+ Novo requerimento</h2>
      </Link>
    </>
  );
}

export default Requerimentos;
