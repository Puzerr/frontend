import AsideHeader from "./AsideHeader.jsx";
import AsideNav from "./AsideNav.jsx";

function Aside() {
  return (
    <aside className="overflow-auto w-sm hidden lg:block bg-gray-300 p-4">
      <AsideHeader titulo="Aluno Online" />
      <AsideNav
        items={[
          "Dashboard",
          "Notas",
          "Faltas",
          "Boletos",
          "Requerimentos",
          "Sair",
        ]}
      />
    </aside>
  );
}

export default Aside;
