import { Outlet } from "react-router";
import Aside from "./Aside.jsx";

function Layout() {
  return (
    <>
      <Aside />
      <main className="flex flex-1 flex-col h-screen m-6">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
