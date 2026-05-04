function InputEmail({ erro, mudaValor }) {
  return (
    <>
      <label htmlFor="e-mail" className="text-lg">
        E-mail
      </label>
      <input
        type="text"
        name="e-mail"
        id="e-mail"
        onChange={mudaValor}
        className="border-2 border-gray-300 h-11 rounded-md pl-2    "
      />
      <p className="text-red-600 my-3">{erro}</p>
    </>
  );
}

export default InputEmail;
