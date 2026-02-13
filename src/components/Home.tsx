import './Home.css';
import { Sparkles, Heart, Users, Gift, Cake, Baby, Balloon, PartyPopper, Bird } from 'lucide-react';

function Home() {
  const scrollToEvents = () => {
    window.location.hash = '#events';
  };

  const scrollToContacts = () => {
    window.location.hash = '#contacts';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-welcome">Добре дошли в</h1>
          <h2 className="hero-brand">
            1001smiles
            <span className="brand-highlight"></span>
          </h2>
          <p className="hero-subtitle">
            Създаваме незабравими моменти и хиляди усмивки за вашите деца
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToEvents}>
              Разгледай мероприятия
            </button>
            <button className="btn-secondary" onClick={scrollToContacts}>
              Свържи се с нас
            </button>
          </div>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-content">
          <h2 className="features-title">Защо да изберете нас?</h2>
          <p className="features-subtitle">
            Ние правим всяко събитие специално и незабравимо
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon feature-icon-1">
                <Sparkles className="icon-main" />
                <Sparkles className="icon-sparkle icon-sparkle-1" />
                <Sparkles className="icon-sparkle icon-sparkle-2" />
              </div>
              <h3 className="feature-title">Магическа атмосфера</h3>
              <p className="feature-description">
                Създаваме приказна среда с красива украса и внимание към детайла
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon-2">
                <Heart className="icon-main" />
                <Sparkles className="icon-sparkle icon-sparkle-1" />
                <Sparkles className="icon-sparkle icon-sparkle-2" />
              </div>
              <h3 className="feature-title">С любов и грижа</h3>
              <p className="feature-description">
                Всяко събитие организираме с любов и отношение към всеки детайл
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon-3">
                <Users className="icon-main" />
              </div>
              <h3 className="feature-title">Опитен екип</h3>
              <p className="feature-description">
                Професионалисти с многогодишен опит в детски празници
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon-4">
                <Gift className="icon-main" />
              </div>
              <h3 className="feature-title">Пълен пакет услуги</h3>
              <p className="feature-description">
                От украса до кетъринг - грижим се за всичко
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-content">
          <h2 className="events-title">Нашите мероприятия</h2>
          <p className="events-subtitle">
            Организираме всякакви детски празници и специални моменти
          </p>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-icon event-icon-1">
                <Cake className="icon" />
              </div>
              <h3 className="event-title">Рожден Ден</h3>
              <p className="event-description">
                Направете рождения ден на вашето дете незабравим! Предлагаме пълна организация с украса, аниматори, торта и забавления.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>

            <div className="event-card">
              <div className="event-icon event-icon-2">
                <Baby className="icon" />
              </div>
              <h3 className="event-title">Погача</h3>
              <p className="event-description">
                Празнувайте първия рожден ден на вашето бебе с традиционна погача в приятна и уютна атмосфера.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>

            <div className="event-card">
              <div className="event-icon event-icon-3">
                <Balloon className="icon" />
              </div>
              <h3 className="event-title">Разкриване на Пола</h3>
              <p className="event-description">
                Споделете вълнуващата новина с близки и приятели! Организираме незабравимо парти за разкриване на пола.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>

            <div className="event-card">
              <div className="event-icon event-icon-4">
                <PartyPopper className="icon" />
              </div>
              <h3 className="event-title">Имен Ден</h3>
              <p className="event-description">
                Честито име! Организирайте специално парти за имения ден на вашето дете с приятели и забавления.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>

            <div className="event-card">
              <div className="event-icon event-icon-5">
                <Bird className="icon" />
              </div>
              <h3 className="event-title">Кръщене</h3>
              <p className="event-description">
                Празнувайте важния духовен момент в живота на вашето дете с елегантна украса и изискана организация.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>

            <div className="event-card">
              <div className="event-icon event-icon-6">
                <Gift className="icon" />
              </div>
              <h3 className="event-title">Специални Събития</h3>
              <p className="event-description">
                Организираме всякакви специални моменти и празници по ваше желание и нужди.
              </p>
              <a href="#contacts" className="event-link">Виж пакети →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
