import Location from "../../assets/Images/location.png";
import Time from "../../assets/Images/time.png";
import Phone from "../../assets/Images/phone.png";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="header-top__wrapper">
            <div className="header-top__start">
              <img src={Location} alt="location icon" width={20} height={20} />
              <address>Наш адрес: г. Бишкек, ул. Ляляля 69</address>
            </div>

            <div className="header-top__middle">
              <img src={Time} alt="time icon" width={20} height={20} />
              <time>График работы: С 8:00 до 22:00 без выходных</time>
            </div>

            <div className="header-top__end">
              <img src={Phone} alt="Phone icon" width={20} height={20} />
              <a href="998901369334">+998 90 136 93 34</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
