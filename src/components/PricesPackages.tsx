import "./PricesPackages.css";

const KID_PARENT_INCLUDES = [
  "Наем на зала – 2 часа и 30 минути",
  "Непрофесионален аниматор с интерактивна програма",
  "Пълно меню за детето",
  "Меню за придружителя",
];

const SECOND_PARENT_INCLUDES = [
  "Пълно меню за придружителя",
  "Напитки (вода или сок)",
];

const KIDS_MENU_ITEMS = [
  "Пица или мини сандвич с пилешко филе и гауда",
  "Свежи зеленчукови пръчици (моркови и краставици)",
  "Плато със сезонни плодове",
  "Домашно приготвени сладки",
  "Напитка (вода или сок)",
];

const PARENTS_MENU_ITEMS = [
  "Домашни мини кюфтенца",
  "Солени мини палачинки с различни вкусове",
  "Плато брускети с разнообразни вкусове",
  "Плато сладки тарталети",
  "Напитка (вода или сок)",
];

function PricesPackages() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <div className="prices-page-bg">
      <div className="birthday-container">
        {/* Hero – text left, photos right */}
        <section className="hero-section">
          <div className="hero-left">
            <h1 className="page-title">
              Рождени дни в 1001 усмивки
              <span className="birthday-hero-emoji">🎂</span>
            </h1>
            <div className="why-box">
              <p>
                Направете рождения ден на вашето дете незабравим! Грижим се за
                всичко – от украсата до забавленията, за да можете да се
                насладите на специалния ден заедно с детето си.
              </p>
            </div>
            <div className="birthday-hero-highlight">
              ✨ Всичко включено за перфектния празник ✨
            </div>
            <button
              type="button"
              className="birthday-packages-hero-cta"
              onClick={scrollToContacts}
            >
              ЗАЯВИ КОНСУЛТАЦИЯ ›
            </button>
          </div>
          <div className="hero-right">
            <div className="birthday-packages-hero-images">
              <div className="birthday-packages-hero-photo">
                <img
                  src="/images/parties/kidpaint1.jpg"
                  alt="Деца творят и рисуват на празник в детски център"
                  loading="lazy"
                />
              </div>
              <div className="birthday-packages-hero-photo">
                <img
                  src="/images/parties/kidpaint2.jpg"
                  alt="Творческа активност за деца на рожден ден"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="birthday-pricing-section">
          <div className="birthday-pricing-header">
            <h2 className="birthday-section-title">Ценова листа</h2>
          </div>

          <div className="birthday-pricing-cards">
            <div className="birthday-price-card">
              <span className="birthday-price-icon">👶</span>
              <h3 className="birthday-price-title">Дете + Придружител</h3>
              <div className="birthday-price-amount">35 €</div>
              <p className="birthday-price-note">
                Цената включва едно дете и един придружителя
              </p>

              <div className="birthday-includes-section">
                <h4 className="birthday-includes-title">
                  <span>✨</span>
                  Включено в пакета
                </h4>
                <ul className="birthday-includes-list">
                  {KID_PARENT_INCLUDES.map((item, i) => (
                    <li key={i}>
                      {item === "Тематична украса по избор" ? (
                        <a href="#themes" className="birthday-includes-link">
                          {item}
                        </a>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="birthday-price-card">
              <span className="birthday-price-icon">👨‍👩‍👧</span>
              <h3 className="birthday-price-title">Втори придружител</h3>
              <div className="birthday-price-amount">10 €</div>
              <p className="birthday-price-note">
                Допълнителна цена за втори придружител
              </p>

              <div className="birthday-includes-section">
                <h4 className="birthday-includes-title">
                  <span>🍽️</span>
                  Включено
                </h4>
                <ul className="birthday-includes-list">
                  {SECOND_PARENT_INCLUDES.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="birthday-decoration-section">
          <div className="birthday-decoration-card">
            <div className="birthday-decoration-icon">🎀</div>
            <div className="birthday-decoration-content">
              <h3 className="birthday-decoration-title">
                <a href="#themes" className="birthday-decoration-link">
                  Тематична украса за всеки повод (допълнително)
                </a>
              </h3>
              <p className="birthday-decoration-description">
                Вие избирате темата и стила на украсата, а ние се грижим за
                всичко останало – от подбора на декорации до тяхното подреждане
                и оформление.
              </p>
            </div>
            <div className="birthday-decoration-price">30 €</div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="birthday-menu-section">
          <div className="birthday-pricing-header">
            <h2 className="birthday-section-title">Менюта</h2>
            <p className="birthday-section-subtitle">
              Вкусна храна за малки и големи
            </p>
          </div>

          <div className="birthday-menu-grid">
            <div className="birthday-menu-card">
              <div className="birthday-menu-header">
                <span className="birthday-menu-icon">👶</span>
                <h3 className="birthday-menu-title">Детско меню</h3>
              </div>
              <ul className="birthday-menu-items">
                {KIDS_MENU_ITEMS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="birthday-menu-card">
              <div className="birthday-menu-header">
                <span className="birthday-menu-icon">🍽️</span>
                <h3 className="birthday-menu-title">Меню за придружители</h3>
              </div>
              <ul className="birthday-menu-items">
                {PARENTS_MENU_ITEMS.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cake Section */}
        <section className="birthday-cake-section">
          <div className="birthday-cake-header">
            <span className="birthday-cake-icon">🎂</span>
            <h2 className="birthday-cake-title">За тортата</h2>
          </div>

          <div className="birthday-cake-content">
            <p>
              Работим в партньорство със сладкарница „Романтика", която предлага
              богато разнообразие от вкусни и красиви торти за всеки повод. При
              желание можем да ви предоставим каталог, за да изберете най-
              подходяща торта за вашето събитие.
            </p>
            <p>Разбира се, имате възможност да внесете и собствена торта.</p>

            <div className="birthday-cake-highlight">
              ⚠️ <strong>Важно:</strong> Съгласно изискванията за безопасност на
              храните, тортата трябва да бъде закупена от регистриран обект и да
              бъде придружена със сертификат или документ за произход. Нашата
              цел е да осигурим безопасна, приятна и незабравима атмосфера за
              вашия празник.✨
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="birthday-cta-section">
          <h3 className="birthday-cta-title">Готови да резервирате?</h3>
          <p className="birthday-cta-text">
            Свържете се с нас, за да обсъдим детайлите и да резервираме датата!
          </p>
          <button
            type="button"
            className="birthday-cta-button"
            onClick={scrollToContacts}
          >
            Заяви консултация
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricesPackages;
