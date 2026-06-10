import { criar, obter, listar, modificar, remover } from "./client.js";

async function main() {
  let resposta = await criar({
    nome: "Banana",
    preco: 23.9,
  });
  console.log("Produto criado: ", resposta);
  resposta = await listar();
  console.log("Produtos listados: ", resposta);
  resposta = await obter(resposta[0]);
  console.log("Produto consultado: ", resposta);
  resposta = await modificar({id: resposta.id, nome: "Banana de pijama", preco: 999.01});
  console.log("Produto atualizado: ", resposta);
  resposta = await remover(resposta);
  console.log("Produto removido com sucesso!");
}

main();
