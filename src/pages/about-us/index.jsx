import { PrimaryButton } from "../../components/Button";

import office from "../../assets/office.png";

import "./style.css";

function AboutUs() {
  return (
    <section className="about-container">
      <div className="content">
        <div className="left-content">
          <img src={office} alt="" />
        </div>
        <div className="right-content">
          <h2>O que é a CV9?</h2>
          <p>
            A <strong>CV9 Projetos</strong> é uma empresa líder no setor de
            construção civil e arquitetura, dedicada a criar e transformar
            espaços com inovação e funcionalidade. Nossa especialidade é
            desenvolver projetos que atendam de maneira eficaz tanto às
            necessidades práticas quanto às exigências estéticas de nossos
            clientes. Nosso compromisso com a qualidade e a sustentabilidade é
            inabalável. Trabalhamos para garantir que cada projeto seja uma
            fusão harmoniosa de design inteligente, técnicas construtivas
            avançadas e uma execução de altíssimo padrão. Acreditamos que a
            construção civil e a arquitetura são mais do que simples
            edificações; são a materialização de sonhos e ideias.
          </p>
          <PrimaryButton>Conheça nosso trajeto</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
