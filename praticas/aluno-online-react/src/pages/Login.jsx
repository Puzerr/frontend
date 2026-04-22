import RodapeCopyright from "../components/RodapeCopright.jsx";
import FormLogin from "../forms/FormLogin.jsx";

function Login() {
  return (
    <>
      <FormLogin titulo="Aluno Online" imagem={true}/>
      <RodapeCopyright />
    </>
  );
}

export default Login;
