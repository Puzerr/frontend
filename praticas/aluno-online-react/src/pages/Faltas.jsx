import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import CardFaltas from "../components/CardFaltas.jsx";

function Faltas() {
  return (
    <>
      <Header />
      <Section>
        <CardFaltas />
        <CardFaltas />
      </Section>
    </>
  );
}

export default Faltas;
