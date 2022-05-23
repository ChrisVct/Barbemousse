import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NotreHistoire from "./components/Main/NotreHistoire/NotreHistoire";
import LaBrasserie from "./components/Main/LaBrasserie/LaBrasserie";

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
        <section id="nosBieres"></section>
        <div className="fixed-bg bg4"></div>
        <section id="actualites"></section>
        <div className="fixed-bg bg5"></div>
        <section id="pointsDeVente"></section>
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
