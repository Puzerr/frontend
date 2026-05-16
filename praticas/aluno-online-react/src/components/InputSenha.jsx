function InputSenha({ erro, mudaValor }) {
  return (
    <>
      <label htmlFor="senha" className="text-lg">
        Senha
      </label>
      <input
        type="password"
        name="senha"
        id="senha"
        onChange={mudaValor}
        className="border-2 border-tertiary h-11 rounded-md pl-2"
      />
      <p className="text-red-600 my-3">{erro}</p>
    </>
  );
}

export default InputSenha;
