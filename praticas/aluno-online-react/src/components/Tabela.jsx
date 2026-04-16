function Tabela({ titulos, periodo, dados }) {
  return (
    <article className="flex flex-1 flex-col mb-6 pb-lg rounded-b-lg rounded-t-xl">
      <table className="min-w-fit rounded-b-lg rounded-t-lg border-gray-300">
        {periodo && (
          <caption className="bg-gray-300 font-semibold text-left lg:text-2xl py-2 px-4 rounded-t-lg">
            {periodo}
          </caption>
        )}
        <thead className="border rounded-t-lg border-gray-300 bg-gray-300 rounded-t-lg">
          <tr>
            {titulos.map((item, index) => (
              <th key={index} className="py-4 lg:text-2xl">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border border-b border-gray-300">
          {dados.map((item, index) => (
            <tr key={index} className="grow-0 even:bg-gray-200 odd:bg-white ">
              {item.map((celula, index) => (
                <td
                  key={index}
                  className="m-3 pl-1 py-2 lg:text-lg border-1 border-gray-300"
                >
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Tabela;
