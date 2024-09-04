import image_contact from "../../assets/image-contact.png";

import { PrimaryButton } from "../../components/Button";

import "./style.css";

function Contact() {
  return (
    <section className="contact-container">
      <div className="content">
        <div className="left-content">
          <h2>Fale com a CV9 Projetos</h2>
          <form>
            <div>
              <input type="text" className="input" placeholder="Nome" />
            </div>
            <div>
              <input
                type="email"
                className="input split-input"
                placeholder="E-mail"
              />
              <input
                type="number"
                className="input split-input"
                placeholder="Celular"
              />
            </div>
            <PrimaryButton>Conheça mais</PrimaryButton>
          </form>
        </div>
        <div className="right-content">
          <img src={image_contact} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
