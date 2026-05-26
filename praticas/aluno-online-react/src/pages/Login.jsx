import RodapeCopyright from "../components/RodapeCopright.jsx";
import FormLogin from "../forms/FormLogin.jsx";

function Login() {
  return (
    <main className="flex flex-col h-screen m-auto">
      <FormLogin titulo="Aluno Online" imagem={true} />
      <RodapeCopyright />
    </main>
  );
}

export default Login;
