function InputEmail() {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <p id="inputEmailErro"></p>
    </>
  );
}

export default InputEmail;
