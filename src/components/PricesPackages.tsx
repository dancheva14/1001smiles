import "./PricesPackages.css";

const KID_PARENT_INCLUDES = [
  "Наем на зала – 2 часа и 30 минути",
  "Аниматори с интерактивна програма",
  "Тематична украса по избор",
  "Пълно меню за детето",
  "Меню за родителя",
];

const SECOND_PARENT_INCLUDES = [
  "Пълно меню за родителя",
  "Напитки (вода или сок)",
  "Достъп до всички активности",
];

const KIDS_MENU_ITEMS = [
  "Пица или мини сандвичи с пушена филе и гауда",
  "Свежи зеленчукови пръчици (моркови и краставици)",
  "Плато със сезонни плодове",
  "Домашно приготвени сладки (без добавена захар)",
  "Напитки – избор вода или сок",
];

const PARENTS_MENU_ITEMS = [
  "Домашни мини кюфтенца",
  "Солени мини палачинки с различни вкусове",
  "1 плато брускети с разнообразни вкусове",
  "1 плато сладки тарталети",
  "Напитки – вода или сок",
];

function PricesPackages() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <div className="prices-page-bg">
      <div className="birthday-container">
        {/* Hero */}
        <section className="birthday-hero">
          <h1 className="birthday-hero-title">
            <span className="birthday-hero-emoji">🎂</span>
            Рождени дни в 1001 усмивки
          </h1>
          <p className="birthday-hero-subtitle">
            Направете рождения ден на вашето дете незабравим! Грижим се за
            всичко – от украсата до забавленията, за да можете да се насладите
            на специалния ден заедно с детето си.
          </p>
          <div className="birthday-hero-highlight">
            ✨ Всичко включено за перфектния празник ✨
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
              <h3 className="birthday-price-title">Дете + Родител</h3>
              <div className="birthday-price-amount">35 €</div>
              <p className="birthday-price-note">
                Цената включва едно дете и един родител
              </p>

              <div className="birthday-includes-section">
                <h4 className="birthday-includes-title">
                  <span>✨</span>
                  Включено в цената
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
              <h3 className="birthday-price-title">Втори родител</h3>
              <div className="birthday-price-amount">10 €</div>
              <p className="birthday-price-note">
                Допълнителна цена за втори родител
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
                <h3 className="birthday-menu-title">Меню за родители</h3>
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
              Детският ни център работи в партньорство със сладкарница
              „Романтика", която предлага разнообразие от вкусни и красиви торти
              за всеки празник. При желание можем да ви предоставим каталог, от
              който да изберете подходяща торта за вашето събитие.
            </p>
            <p>
              Разбира се, ако предпочитате, имате възможност да внесете и
              собствена торта.
            </p>

            <div className="birthday-cake-highlight">
              ⚠️ <strong>Важно:</strong> Молим да имате предвид, че съгласно
              изискванията за безопасност на храните, тортата трябва да бъде
              закупена от регистриран обект и да бъде придружена със сертификат
              или документ, удостоверяващ произхода ѝ. Нашата цел е да осигурим
              безопасна, приятна и незабравима атмосфера за вашия празник.
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
