import AsideHeader from "./AsideHeader.jsx";
import AsideNav from "./AsideNav.jsx";

function Aside() {
  return (
    <aside className="w-sm h-full hidden lg:block bg-gray-300 p-4">
      <AsideHeader />
      <AsideNav />
    </aside>
  );
}

export default Aside;
