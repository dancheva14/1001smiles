import "./ExtrasPage.css";

const EXTRAS_ITEMS = [
  {
    icon: "🎭",
    title: "Аниматор по избор на тема",
    description:
      "Любим герой с костюм по желание на родителя, весели игри с реквизит, рисуване на лица, музикално озвучаване и специален ритуал за тържествено изнасяне на тортата.",
  },
  {
    icon: "🧸",
    title: "Маскот",
    description:
      "Голям и пухкав герой за снимки и настроение. Маскотът не провежда анимационна програма.",
  },
  {
    icon: "🍭",
    title: "Машина за захарен памук",
    description: "Сладко изкушение, което децата обожават!",
  },
  {
    icon: "🎊",
    title: "Пинята",
    description: "Пълна с изненади и много усмивки!",
  },
  {
    icon: "🎩",
    title: "Фокусник",
    description:
      "Магично шоу, което впечатлява както малките, така и по-големите гости.",
  },
];

const SUMMER_ITEMS = [
  {
    icon: "🏰",
    title: "Балонена къща",
    description: "Скачане, смях и безкрайна енергия!",
  },
  {
    icon: "🫧",
    title: "Пяна парти",
    description: "Истинско лятно приключение с много настроение.",
  },
  {
    icon: "🎤",
    title: "Диско парти с пушек, осветление и караоке",
    description:
      "Светлини, музика и сцена за малките звезди – подходящо за по-големи деца.",
  },
  {
    icon: "⚽",
    title: "Футболно парти",
    description:
      "За всички малки шампиони, които обичат играта и състезанията.",
  },
];

function ExtrasPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <section className="extras-page-section">
      <div className="extras-container">
        {/* Hero */}
        <div className="extras-hero">
          <h1 className="extras-title">
            <span className="emoji-icon">🎉</span>
            Парти екстри
          </h1>
          <p className="extras-subtitle">
            Допълнителни услуги за още повече усмивки и незабравими моменти
          </p>
        </div>

        {/* Extension Card - Featured */}
        <div className="extension-section">
          <div className="extension-card">
            <div className="extension-icon">⏰</div>
            <div className="extension-content">
              <h3 className="extension-title">
                Такса при удължаване на празника
              </h3>
              <p className="extension-description">
                Нужно ви е повече време за незабравимото тържество? Удължете
                празника с още час забавления! Ако залата не е резервирана
                непосредствено след Вашето парти.
              </p>
              <div className="extension-details">
                <span className="duration-badge">30 мин.</span>
                <span className="duration-badge">60 мин.</span>
                <span className="price-tag">30 € / 50 €</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Extras */}
        <div className="extras-content">
          <h2 className="section-title">
            <span className="emoji-icon">🎭</span>
            Забавления и атракции
          </h2>

          <div className="extras-grid">
            {EXTRAS_ITEMS.map((item, index) => (
              <div key={index} className="extra-card">
                <div className="extra-icon">{item.icon}</div>
                <h3 className="extra-title">{item.title}</h3>
                <p className="extra-description">{item.description}</p>
                <button
                  type="button"
                  className="extra-button"
                  onClick={scrollToContacts}
                >
                  Запитване
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Summer Extras */}
        <div className="summer-content">
          <h2 className="section-title summer-title">
            <span className="emoji-icon">☀️</span>
            Летни забавления
          </h2>
          <p className="section-subtitle">
            За летните рождени дни сме подготвили още повече щури емоции:
          </p>

          <div className="summer-grid">
            {SUMMER_ITEMS.map((item, index) => (
              <div key={index} className="summer-card">
                <div className="summer-icon">{item.icon}</div>
                <h3 className="extra-title">{item.title}</h3>
                <p className="extra-description">{item.description}</p>
                <button
                  type="button"
                  className="summer-button"
                  onClick={scrollToContacts}
                >
                  Запитване
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <h3 className="cta-title">Готови за незабравимо парти?</h3>
          <p className="cta-text">
            Свържете се с нас, за да обсъдим детайлите и да направим празника
            перфектен!
          </p>
          <button
            type="button"
            className="cta-button"
            onClick={scrollToContacts}
          >
            Свържете се с нас
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExtrasPage;
