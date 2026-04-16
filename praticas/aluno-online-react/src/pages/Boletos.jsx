import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";

function Boletos() {
  const data = {
    0: ["Vencimento", "Valor R$", "Situação"],
    1: {
      dados: [
        ["19/04/2026", "R$500", "Pago"],
        ["19/05/2026", "R$500", "Em Atraso"],
        ["19/06/2026", "R$500", "A Pagar"],
        ["19/08/2026", "R$500", "A Pagar"],
        ["19/09/2026", "R$500", "A Pagar"],
        ["19/11/2026", "R$500", "A Pagar"],
        ["19/12/2026", "R$500", "A Pagar"],
        ["19/01/2027", "R$500", "A Pagar"],
        ["19/02/2026", "R$500", "A Pagar"],
      ],
    },
  };
  return (
    <>
      <Header titulo="Meus Boletos" subtitulo="Histórico de Pagamentos" />
      <Section tipo="tabela" items={Object.values(data)} />
    </>
  );
}

export default Boletos;
