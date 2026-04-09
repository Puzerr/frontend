import Dashboard from "../pages/Dashboard.jsx";
import Aside from "./Aside.jsx";

function Layout() {
  return (
    <>
      <Aside />
      <main className="flex flex-1 flex-col h-full m-6">
        <Dashboard />
      </main>
    </>
  );
}

export default Layout;
