function Card({ titulo, conteudo }) {
  return (
    <article className="mb-6 pb-lg rounded-t-lg rounded-b-lg border border-gray-300">
      <h3 className="bg-gray-300 font-semibold py-2 px-4 rounded-t-lg">
        {titulo}
      </h3>
      {conteudo.map((elemento, index) => (
        <p className="py-2 px-4" key={index}>
          {elemento}
        </p>
      ))}
    </article>
  );
}

export default Card;
