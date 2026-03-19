import "./Home.css";
import { publicUrl } from "../lib/publicUrl";

function Home() {
  const scrollToEvents = () => {
    window.location.hash = "#prices-birthday";
  };

  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  const services = [
    {
      icon: "🎂",
      title: "Рождени дни",
      description:
        "Незабравими партита с теми, анимации и чудесна атмосфера за вашето дете",
    },
    {
      icon: "🍼",
      title: "Бебешки партита",
      description:
        "Нежни и красиви тематични партита за новото бебе в семейството",
    },
    {
      icon: "🌸",
      title: "Именни дни",
      description:
        "Отпразнувайте важния ден с близките си в топла и весела среда",
    },
    {
      icon: "🥐",
      title: "Погачи",
      description: "Традиционни и модерни погачи, организирани с вкус и стил",
    },
  ];

  const whyItems = [
    {
      icon: "🎨",
      title: "Уникален дизайн",
      description:
        "Всяко събитие се украсява индивидуално според желанията на детето",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Семеен подход",
      description: "Третираме всяко семейство с топлина и персонално внимание",
    },
    {
      icon: "🎈",
      title: "Безупречна организация",
      description: "Грижим се за всеки детайл, за да се насладите на момента",
    },
  ];

  /*const partyImages = [
    publicUrl("images/parties/birthday.jpg"),
    publicUrl("images/parties/birthday3.jpg"),
    publicUrl("images/parties/babyShower.jpeg"),
    publicUrl("images/parties/babyParty.jpg"),
    publicUrl("images/parties/birthday2.jpg"),
    publicUrl("images/parties/animalsBirthday.jpg"),
    publicUrl("images/parties/birthday1.jpg"),
    publicUrl("images/parties/birthday4.jpg"),
  ];

  /*const galleryItems = [
    { emoji: "🎂", label: "Рожден ден – Мия, 5г.", src: partyImages[0] },
    { emoji: "🌸", label: "Именен ден – Стефани", src: partyImages[1] },
    { emoji: "🍼", label: "Baby shower", src: partyImages[2] },
    { emoji: "🥐", label: "Погача – Семейство Петрови", src: partyImages[3] },
    { emoji: "🎈", label: "Рожден ден – Иван, 3г.", src: partyImages[4] },
    { emoji: "✨", label: "Тематично парти", src: partyImages[5] },
    { emoji: "🎉", label: "Рожден ден – Лея, 7г.", src: partyImages[6] },
    { emoji: "💛", label: "Именен ден – Виктор", src: partyImages[7] },
  ];*/

  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero">
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti" />
        <div className="confetti">🎉</div>
        <div className="confetti">🎉</div>
        <div className="confetti">🎂</div>
        <div className="confetti">🎂</div>
        <div className="star">🌟</div>

        <div className="hero-content">
          <div className="hero-tag">✨ Детски парти център</div>
          <h1>1001smiles</h1>
          <h2>
            Тук детските очи блестят, смехът звучи най-искрено,
            <br /> а всеки празник се превръща в красив спомен.
          </h2>
          <div className="hero-buttons">
            <a
              href="#events"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToEvents();
              }}
            >
              🎉 Разгледай мероприятия
            </a>
            <a
              href="#contacts"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToContacts();
              }}
            >
              📞 Свържи се с нас
            </a>
          </div>
          {/*<div className="hero-stats">
            <div className="stat">
              <div className="stat-num">500+</div>
              <div className="stat-label">щастливи семейства</div>
            </div>
            <div className="stat">
              <div className="stat-num">⭐ 5.0</div>
              <div className="stat-label">средна оценка</div>
            </div>
            <div className="stat">
              <div className="stat-num">8г.</div>
              <div className="stat-label">опит и любов</div>
            </div>
          </div>*/}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="section-title">
          Какво <span>предлагаме</span>?
        </h2>
        <p className="section-sub">
          Всяко събитие е уникално – организираме го с любов и внимание към
          детайла
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="why-section">
        <h2 className="section-title">
          Защо да изберете <span>нас?</span>
        </h2>
        <p className="section-sub">
          Вярваме, че всяко дете заслужава магически спомени
        </p>
        <div className="why-grid">
          {whyItems.map((w, i) => (
            <div key={i} className="why-item">
              <div className="why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      {/*<section className="gallery-section">
        <h2 className="section-title">
          От нашата <span>галерия</span>
        </h2>
        <p className="section-sub">Моменти, заснети с любов</p>
        <div className="gallery-masonry">
          {galleryItems.map((g, i) => (
            <a
              key={i}
              href="#gallery"
              className="gallery-card"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#gallery";
              }}
            >
              <div className={`gallery-placeholder gp-${(i % 8) + 1}`}>
                <img src={g.src} alt={g.label} className="gallery-card-img" />
              </div>
              <div className="gallery-label">
                {g.emoji} {g.label}
              </div>
            </a>
          ))}
        </div>
      </section>*/}

      {/* CTA banner */}
      <section className="cta-banner">
        <div className="cta-emojis">🎉🎂🎈🌟✨</div>
        <h2>Нека направим рождения ден незабравим!</h2>
        <p>
          Свържете се с нас и ще организираме вашето специално събитие с любов
        </p>
        <a
          href="#contacts"
          className="btn-white"
          onClick={(e) => {
            e.preventDefault();
            scrollToContacts();
          }}
        >
          📞 Резервирайте сега
        </a>
      </section>
    </>
  );
}

export default Home;
