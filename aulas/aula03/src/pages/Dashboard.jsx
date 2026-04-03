import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";
import Card from "../components/Card.jsx";
import Layout from "./Layout.jsx";

function Dashboard() {
  return (
    <>
      <Layout>
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
      </Layout>
    </>
  );
}

export default Dashboard;
