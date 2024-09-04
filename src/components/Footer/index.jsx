import { FacebookIcon, InstagramIcon } from "../Icons";

import logo from "../../assets/logo.png";

import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="content">
        <div className="top-content">
          <div className="image-container">
            <img src={logo} alt="" />
          </div>
          <div className="text-container">
            <p>
              Comprometidos com seus sonhos e projetos, somos uma equipe de
              construção e arquitetura que encontra sempre as melhores soluções.
              Com um portfólio completo de serviços para nossos clientes, todos
              os dias.
            </p>
            <div className="text-adress">
              <p>
                <strong>Endereço:</strong> Av. Barão de Limeira, 1500 – Santa
                Cecília, São Paulo – SP, 01202-002
              </p>
              <div className="icons-container">
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="icon"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="icon"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <p>
            A CV9 Projetos, inscrita sob o CNPJ (00.000.000/0001-00), é uma
            empresa de engenharia e arquitetura devidamente registrada no
            Conselho Regional de Engenharia e Agronomia (CREA) e no Conselho de
            Arquitetura e Urbanismo (CAU), comprometida com a excelência em
            serviços de construção civil e projetos arquitetônicos. Atuamos em
            conformidade com todas as normativas vigentes, oferecendo um
            portfólio completo que abrange desde a concepção de projetos até a
            execução de obras, sempre priorizando a qualidade, segurança e
            inovação. A CV9 Projetos também pode realizar atividades
            complementares relacionadas aos setores de engenharia e arquitetura,
            desde que não conflitem com as atividades principais, podendo ser
            realizadas diretamente pela CV9 ou por terceiros devidamente
            habilitados. Todos os serviços são prestados com o devido
            cumprimento das normas técnicas e regulamentares estabelecidas pelos
            órgãos reguladores. Para mais informações sobre nossos serviços,
            entre em contato com nossa equipe. Em caso de dúvidas ou sugestões,
            estamos à disposição para atendê-lo.
          </p>
        </div>
      </div>
    </footer>
  );
};
