import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Notas from "../pages/Notas.jsx";
import Faltas from "../pages/Faltas.jsx";
import Boletos from "../pages/Boletos.jsx";
import Requerimentos from "../pages/Requerimentos.jsx";
import Aside from "./Aside.jsx";

function Layout({ pagina }) {
  const identificador = pagina;
  return (
    <>
      {identificador != 0 && <Aside />}
      <main className="flex flex-1 flex-col h-screen m-6">
        {identificador == 0 && <Login />}
        {identificador == 1 && <Dashboard />}
        {identificador == 2 && <Notas />}
        {identificador == 3 && <Faltas />}
        {identificador == 4 && <Boletos />}
        {identificador == 5 && <Requerimentos />}
      </main>
    </>
  );
}

export default Layout;
