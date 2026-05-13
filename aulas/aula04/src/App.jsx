import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Settings from "./pages/Settings.jsx";
import Erro404 from "./pages/Erro404.jsx";
import Layout from "./layouts/Layout.jsx";
import Login from "./pages/Login.jsx";
import Perfil from "./pages/Perfil.jsx";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext.jsx";

function App() {
  const { logado } = useContext(AuthContext);

  return (
    <Routes>
      {logado ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="perfil/:id" element={<Perfil />} />
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
