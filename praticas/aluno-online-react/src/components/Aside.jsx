import AsideHeader from "./AsideHeader.jsx";
import AsideNav from "./AsideNav.jsx";

function Aside() {
  return (
    <aside className="overflow-auto w-sm hidden lg:block p-4 bg-primary">
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
