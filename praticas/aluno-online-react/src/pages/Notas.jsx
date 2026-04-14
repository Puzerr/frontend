import Header from "../components/Header.jsx";
import Section from "../components/Section.jsx";
import CardNotas from "../components/CardNotas.jsx";

function Notas() {
  return (
    <>
      <Header />
      <Section>
        <CardNotas />
        <CardNotas />
      </Section>
    </>
  );
}

export default Notas;
