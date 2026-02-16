import "./Home.css";
import { useSpring, animated, useTrail, config } from "@react-spring/web";
import { useInView } from "@react-spring/web";
import {
  Sparkles,
  Heart,
  Users,
  Gift,
  Cake,
  Baby,
  Balloon,
  PartyPopper,
  Bird,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

function Home() {
  const scrollToEvents = () => {
    window.location.hash = "#events";
  };

  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  // Hero анимации
  const heroSpring = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: config.gentle,
  });

  const brandSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    delay: 200,
    config: { ...config.wobbly, duration: 1000 },
  });

  const buttonsSpring = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 600,
    config: config.gentle,
  });

  // Features секция с InView
  const [featuresRef, featuresInView] = useInView({
    once: true,
    rootMargin: "-100px 0px",
  });

  const featureCards = [
    {
      icon: Sparkles,
      title: "Магическа атмосфера",
      description:
        "Създаваме приказна среда с красива украса и внимание към детайла",
      color: "#ffb6c1",
      sparkles: true,
    },
    {
      icon: Heart,
      title: "С любов и грижа",
      description:
        "Всяко събитие организираме с любов и отношение към всеки детайл",
      color: "#90ee90",
      sparkles: true,
    },
    {
      icon: Users,
      title: "Опитен екип",
      description: "Професионалисти с многогодишен опит в детски празници",
      color: "#9370db",
      sparkles: false,
    },
    {
      icon: Gift,
      title: "Пълен пакет услуги",
      description: "От украса до кетъринг - грижим се за всичко",
      color: "#ffd700",
      sparkles: false,
    },
  ];

  const featureTrail = useTrail(featureCards.length, {
    opacity: featuresInView ? 1 : 0,
    transform: featuresInView ? "translateY(0px)" : "translateY(50px)",
    config: config.gentle,
  });

  // Events секция с InView
  const [eventsRef, eventsInView] = useInView({
    once: true,
    rootMargin: "-100px 0px",
  });

  const eventCards = [
    {
      icon: Cake,
      title: "Рожден Ден",
      description:
        "Направете рождения ден на вашето дете незабравим! Предлагаме пълна организация с украса, аниматори, торта и забавления.",
      color: "#ffb6c1",
    },
    {
      icon: Baby,
      title: "Погача",
      description:
        "Празнувайте първия рожден ден на вашето бебе с традиционна погача в приятна и уютна атмосфера.",
      color: "#ffd700",
    },
    {
      icon: Balloon,
      title: "Разкриване на Пола",
      description:
        "Споделете вълнуващата новина с близки и приятели! Организираме незабравимо парти за разкриване на пола.",
      color: "#ff69b4",
    },
    {
      icon: PartyPopper,
      title: "Имен Ден",
      description:
        "Честито име! Организирайте специално парти за имения ден на вашето дете с приятели и забавления.",
      color: "#9370db",
    },
    {
      icon: Bird,
      title: "Кръщене",
      description:
        "Празнувайте важния духовен момент в живота на вашето дете с елегантна украса и изискана организация.",
      color: "#87ceeb",
    },
    {
      icon: Gift,
      title: "Специални Събития",
      description:
        "Организираме всякакви специални моменти и празници по ваше желание и нужди.",
      color: "#98d8c8",
    },
  ];

  const eventTrail = useTrail(eventCards.length, {
    opacity: eventsInView ? 1 : 0,
    transform: eventsInView ? "translateY(0px) scale(1)" : "translateY(50px) scale(0.9)",
    config: config.gentle,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <animated.div style={heroSpring}>
            <h1 className="hero-welcome">Детски парти център</h1>
          </animated.div>
          <animated.h1 style={brandSpring} className="hero-brand">
            1001smiles
            <span className="brand-highlight"></span>
          </animated.h1>
          <animated.p style={heroSpring} className="hero-subtitle">
            Създаваме незабравими моменти и хиляди усмивки за вашите деца
          </animated.p>
          <animated.div style={buttonsSpring} className="hero-buttons">
            <button className="btn-primary" onClick={scrollToEvents}>
              Разгледай мероприятия
            </button>
            <button className="btn-secondary" onClick={scrollToContacts}>
              Свържи се с нас
            </button>
          </animated.div>
          <div className="scroll-indicator"></div>
        </div>

        {/* Floating декорации */}
        <div className="floating-decorations">
          <div className="floating-heart floating-1">❤️</div>
          <div className="floating-star floating-2">⭐</div>
          <div className="floating-balloon floating-3">🎈</div>
          <div className="floating-gift floating-4">🎁</div>
          <div className="floating-cake floating-5">🎂</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef}>
        <div className="features-content">
          <h2 className="features-title">Защо да изберете нас?</h2>
          <p className="features-subtitle">
            Ние правим всяко събитие специално и незабравимо
          </p>
          <div className="features-grid">
            {featureTrail.map((style, index) => {
              const feature = featureCards[index];
              const IconComponent = feature.icon;
              return (
                <animated.div key={index} style={style} className="feature-card">
                  <div
                    className="feature-icon"
                    style={{ backgroundColor: feature.color }}
                  >
                    <IconComponent className="icon-main" />
                    {feature.sparkles && (
                      <>
                        <Sparkles className="icon-sparkle icon-sparkle-1" />
                        <Sparkles className="icon-sparkle icon-sparkle-2" />
                      </>
                    )}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section" ref={eventsRef}>
        <div className="events-content">
          <h2 className="events-title">Нашите мероприятия</h2>
          <p className="events-subtitle">
            Организираме всякакви детски празници и специални моменти
          </p>
          <div className="events-grid">
            {eventTrail.map((style, index) => {
              const event = eventCards[index];
              const IconComponent = event.icon;
              return (
                <animated.div key={index} style={style} className="event-card">
                  <div
                    className="event-icon"
                    style={{ backgroundColor: event.color }}
                  >
                    <IconComponent className="icon" />
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <a href="#contacts" className="event-link">
                    Виж пакети →
                  </a>
                </animated.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Готови да създадем незабравими спомени?</h2>
            <p className="cta-subtitle">
              Свържете се с нас и нека заедно организираме перфектното събитие за вашето дете
            </p>
            <div className="cta-buttons">
              <a href="tel:0893535084" className="cta-button cta-button-phone">
                <Phone className="cta-phone-icon" />
                <span>0893 53 50 84</span>
              </a>
              <a href="#contacts" className="cta-button cta-button-inquiry">
                Изпрати запитване
              </a>
            </div>
          </div>
          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <MapPin className="cta-contact-icon" />
              <div className="cta-contact-details">
                <h3 className="cta-contact-label">Адрес</h3>
                <p className="cta-contact-text">гр. Перник, ул. Волга 28</p>
              </div>
            </div>
            <div className="cta-contact-item">
              <Mail className="cta-contact-icon" />
              <div className="cta-contact-details">
                <h3 className="cta-contact-label">E-mail</h3>
                <p className="cta-contact-text">1001smiles@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
