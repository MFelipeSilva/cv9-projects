import { areas } from "../../utils/areas";

import { PrimaryButton } from "../../components/Button";

import "./style.scss";

function Areas() {
  return (
    <section className="areas-container">
      <div className="content">
        <div className="text-container">
          <h2>Atuações na cv9 projetos</h2>
          <h3>
            Acesse as mais avançadas soluções de construção, com atendimento
            dedicado e execução de excelência para transformar suas ideias em
            obras concretas.
          </h3>
        </div>

        <div className="cards-container">
          {areas.map((area) => (
            <div className="card">
              <img src={area.image} alt="" />
              <h3>{area.title}</h3>
            </div>
          ))}
        </div>
        <PrimaryButton>Faça um orçamento</PrimaryButton>
      </div>
    </section>
  );
}

export default Areas;
