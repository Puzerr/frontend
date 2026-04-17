function InputSenha({ valor, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        value={valor}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputSenha;
