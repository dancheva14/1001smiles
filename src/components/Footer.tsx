import "./Footer.css";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div>
          <div className="footer-logo">
            🎉 <span>1001smiles</span>
          </div>
          <p>
            Детски парти център, където всяко дете е звезда. Създаваме
            незабравими спомени с любов и усмивки.
          </p>
          <div className="footer-animals">🐰 🦉 🐻 🦒 🦌 🦦</div>
        </div>
        <div className="footer-links">
          <h5>Навигация</h5>
          <a href="#begginning">Начало</a>
          <a href="#events">Мероприятия</a>
          <a href="#prices-birthday">Цени и пакети</a>
          <a href="#gallery">Галерия</a>
          <a href="#about-us">За нас</a>
        </div>
        <div className="footer-links">
          <h5>Контакти</h5>
          <a href="#contacts">гр. Перник, ул. Волга 28</a>
          <a href="tel:0893535084">0893 53 50 84</a>
          <a href="mailto:1001smiles@gmail.com">1001smiles@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} 1001smiles · Направено с 💛 за вашите деца
      </div>
    </footer>
  );
}

export default Footer;
