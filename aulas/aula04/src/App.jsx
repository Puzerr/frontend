import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Settings from "./pages/Settings.jsx";
import Erro404 from "./pages/Erro404.jsx";

function App(){
  return <Routes>
    <Route index element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/settings" element={<Settings />}/>
    <Route path="*" element={<Erro404 />}/>
  </Routes>
};

export default App;