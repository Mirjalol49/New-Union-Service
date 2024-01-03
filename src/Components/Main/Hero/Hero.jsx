import "./Hero.css";
import HeroBg from "../../../assets/Images/heroBg.png";
import Button from "../../../generic/Button/Button";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__wrapper">
          <div className="hero-section__start">
            <h1 className="hero-section__title">
              Доступный сервис грузовых автомобилей
            </h1>
            <p className="hero-section__text">
              Откройте для себя идеальное сочетание качества и доступности с
              нашим сервисом грузовых автомобилей. Созданные для ваших нужд, мы
              предлагаем надежные решения по выгодным ценам. Испытайте
              исключительный сервис и экономическую эффективность вместе с нами
              уже сегодня!
            </p>
            <Button>Чета сделать</Button>
          </div>
          <img className="hero-section__img" src={HeroBg} alt="truck image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
