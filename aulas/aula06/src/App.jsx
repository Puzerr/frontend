import { Routes, Route } from "react-router";
import Listagem from "./pages/Listagem.jsx";
import Formulario from "./pages/Formulario.jsx";
import Login from "./pages/Login.jsx";
import Privado from "./pages/Privado.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Privado />}>
        <Route path="/produtos" element={<Listagem />} />
        <Route path="/produtos/novo" element={<Formulario />} />
        <Route path="/produtos/editar/:id" element={<Formulario />} />
      </Route>
    </Routes>
  );
}

export default App;
