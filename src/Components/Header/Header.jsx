import "./Header.css";
import Location from "../../assets/Images/location.png";
import Time from "../../assets/Images/time.png";
import Phone from "../../assets/Images/phone.png";
import Logo from "../../assets/Images/logo.svg";
import Button from "../../generic/Button/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-top__wrapper">
            <div className="header-top__start">
              <img src={Location} alt="location icon" width={20} height={20} />
              <address className="header-top__address header-top__width">
                Наш адрес: <p>г. Бишкек, ул. Ляляля 69</p>
              </address>
            </div>

            <div className="header-top__start">
              <img src={Time} alt="time icon" width={20} height={20} />
              <time className="header-top__time header-top__width">
                График работы: <p>С 8:00 до 22:00 без выходных</p>
              </time>
            </div>
          </div>

          <div className="header-top__end">
            <img src={Phone} alt="Phone icon" width={20} height={20} />
            <a href="tel:+998901369334">+998 90 136 93 34</a>
          </div>
        </div>
        <div className="header-bottom">
          <a href="./index.html">
            <img className="header-bottom__logo" src={Logo} alt="logo img" />
          </a>
          <nav>
            <ul className="header-bottom__list">
              <li className="header-bottom__item">
                <a href="">Это мы</a>
              </li>
              <li className="header-bottom__item">
                <a href="">Почему мы?</a>
              </li>
              <li className="header-bottom__item">
                <a href="">А вот поэтому</a>
              </li>
              <li className="header-bottom__item">
                <a href="">Контакты</a>
              </li>
            </ul>
          </nav>

          <Button>Заказать звонок</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
