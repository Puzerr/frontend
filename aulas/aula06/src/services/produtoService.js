const url = "http://localhost:3000/produto";

async function criar(produto) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function obter(produto) {
  try {
    const response = await fetch(`${url}/${produto.id}`);
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function listar() {
  try {
    const response = await fetch(url);
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function modificar(produto) {
  try {
    const response = await fetch(`${url}/${produto.id}`, {
      method: "PUT",
      body: JSON.stringify(produto),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function remover(produto) {
  try {
    const response = await fetch(`${url}/${produto.id}`, {
      method: "DELETE",
    });
    return true;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

export { criar, obter, listar, modificar, remover };
