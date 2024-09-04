import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-scroll";

import Slider from "react-slick";

import { services } from "../../utils/services";

import { ArrowRightIcon } from "../../components/Icons";

import "./style.css";

function Services() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="services-container">
      <div className="content">
        <div className="text-container">
          <h2>Serviços na cv9 projetos</h2>
          <h3>
            Acesse as mais avançadas soluções de construção, com atendimento
            dedicado e execução de excelência para transformar suas ideias em
            obras concretas.
          </h3>
        </div>
        <div className="cards-container">
          <Slider {...settings}>
            {services.map((service) => (
              <div className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="#" href="#">
                  Saiba mais <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Services;
