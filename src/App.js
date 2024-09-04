import { Element } from "react-scroll";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Areas from "./pages/areas";
import Services from "./pages/services";
import Team from "./pages/team";
import Contact from "./pages/contact";

import "./style.css";

function App() {
  return (
    <main className="main-container">
      <Element name="home">
        <Home />
      </Element>
      <Element name="sobre-nos">
        <AboutUs />
      </Element>
      <Element name="areas">
        <Areas />
      </Element>
      <Element name="serviços">
        <Services />
      </Element>
      <Element name="equipe">
        <Team />
      </Element>
      <Element name="atendimento">
        <Contact />
      </Element>
    </main>
  );
}

export default App;
