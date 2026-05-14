import { Routes, Route } from "react-router";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Faltas from "./pages/Faltas.jsx";
import Boletos from "./pages/Boletos.jsx";
import Notas from "./pages/Notas.jsx";
import Requerimentos from "./pages/Requerimentos.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  );
}

export default App;
