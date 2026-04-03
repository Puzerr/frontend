import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

function Layout() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
      </main>
    </>
  );
}

export default Layout;
