import Card from "./Card.jsx";
import Tabela from "./Tabela.jsx";

function Section({ items, tipo }) {
  switch (tipo) {
    case "card": {
      return (
        <section>
          {items.map((elemento, index) => (
            <Card
              key={index}
              titulo={elemento.titulo}
              conteudo={elemento.conteudo}
            />
          ))}
        </section>
      );
    }
    case "tabela": {
      const registros = [];
      items.forEach((elemento, index) => index > 0 && registros.push(elemento));
      return (
        <section>
          {registros.map((valor, index) => (
            <Tabela
              key={index}
              titulos={items[0]}
              periodo={valor.periodo}
              dados={valor.dados}
            />
          ))}
        </section>
      );
    }
  }
}

export default Section;
