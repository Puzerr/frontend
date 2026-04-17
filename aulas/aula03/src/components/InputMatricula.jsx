function InputMatricula({ erro, mudaValor }) {
  return (
    <>
      <label htmlFor="matricula">Matricula</label>
      <input
        type="number"
        name="matricula"
        id="matricula"
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputMatricula;
