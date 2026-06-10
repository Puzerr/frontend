import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listar, remover } from "../services/produtoService.js";

function Listagem() {
  const [dados, setDados] = useState([]);

  const tratarRemover = async (produto) => {
    await remover(produto);
    setDados(dados.filter((item) => item.id != produto.id));
  };

  useEffect(() => {
    const disparar = async () => {
      const response = await listar();
      setDados(response);
    };
    disparar();
  }, []);

  return (
    <>
      <h1>Listagem de produtos</h1>
      <Link to="/produtos/novo">+ Adicionar</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.unidade}</td>
              <td>
                <Link to={`/produtos/editar/${item.id}`} className="mr-3">
                  Editar
                </Link>
                <Link
                  to="/produtos"
                  onClick={() => {
                    tratarRemover(item);
                  }}
                >
                  Remover
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listagem;
