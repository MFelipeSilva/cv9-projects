import { PrimaryButton } from "../../components/Button";

import "./style.css";

function Home() {
  return (
    <section className="home-container">
      <div className="content">
        <h1>Criando Espaços com Inovação</h1>
        <h2>Construindo Futuros com Excelência.</h2>
        <PrimaryButton icon={true}>Fale conosco</PrimaryButton>
      </div>
    </section>
  );
}

export default Home;
