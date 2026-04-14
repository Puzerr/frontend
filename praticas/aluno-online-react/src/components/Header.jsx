import avatar from "../assets/avatar.svg";

function Header() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="font-bold">Olá, Aluno!</h1>
        <img src={avatar} alt="Ícone de usuário" className="w-12" />
      </header>
      <h2 className="font-bold py-4 mb-3">Bem-vindo ao portal do aluno</h2>
    </>
  );
}

export default Header;
