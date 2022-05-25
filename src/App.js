import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NotreHistoire from "./components/Main/NotreHistoire/NotreHistoire";
import LaBrasserie from "./components/Main/LaBrasserie/LaBrasserie";
import NosBieres from "./components/Main/NosBieres/NosBieres";
import FacebookSection from "./components/Main/Facebook/FacebookSection";
import PointsDeVente from "./components/Main/PointsDeVente/PointsDeVente";

function App() {
  return (
    <div className="container-fluid g-0">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="fixed-bg bg1"></div>
        <NotreHistoire />
        <div className="fixed-bg bg2"></div>
        <LaBrasserie />
        <div className="fixed-bg bg3"></div>
        <NosBieres />
        <div className="fixed-bg bg3"></div>
        <FacebookSection />
        <div className="fixed-bg bg3"></div>
        <PointsDeVente />
        <div className="fixed-bg bg6"></div>
        <section id="Contact"></section>
        <div className="fixed-bg bg7"></div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
