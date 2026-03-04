import "./ThemesPage.css";

const GIRLS_THEMES = [
  { icon: "🧜‍♀️", name: "Парти Русалка", badge: "Популярно" },
  { icon: "🐱", name: "Котешко парти" },
  { icon: "🌼", name: "Градинско парти Маргаритки" },
  { icon: "🍋", name: "Лимонено парти" },
  { icon: "🦄", name: "Парти Еднорог", badge: "Топ избор" },
  { icon: "😴", name: "Пижамено парти" },
  { icon: "🍦", name: "Сладоледено парти" },
  { icon: "🎪", name: "Цирково парти" },
  { icon: "🦕", name: "Динозавърско парти момиче" },
  { icon: "🦢", name: "Грациозно парти Лебед" },
  { icon: "🌿", name: "Бохо парти" },
  { icon: "🐕", name: "Кучешко парти" },
  { icon: "🦋", name: "Парти Пеперуди" },
  { icon: "🗼", name: "Парти в Париж" },
  { icon: "🧚‍♀️", name: "Парти с Фея" },
  { icon: "🌊", name: "Парти Морски Еднорог" },
  { icon: "🐰", name: "Парти Сладко Зайче" },
  { icon: "🦙", name: "Лама парти" },
  { icon: "🌈", name: "Парти Дъга", badge: "Популярно" },
  { icon: "🦩", name: "Тропическо Фламинго Парти" },
  { icon: "🩰", name: "Балерина парти" },
  { icon: "🍭", name: "Candy Party" },
  { icon: "🍄", name: "Парти с Гномчета" },
  { icon: "🌮", name: "Fiesta Fun" },
  { icon: "🦁", name: "Сафари парти" },
  { icon: "🤠", name: "Cowgirl Party" },
  { icon: "💪", name: "Super Girl" },
  { icon: "🎨", name: "ART PARTY" },
  { icon: "🎉", name: "Festive Birthday" },
  { icon: "🐴", name: "Конно парти" },
  { icon: "📚", name: "Back to school" },
];

const BOYS_THEMES = [
  { icon: "🎪", name: "Цирково парти" },
  { icon: "🚧", name: "Строително парти", badge: "Топ избор" },
  { icon: "🏎️", name: "Парти Състезателни Коли" },
  { icon: "🚀", name: "Космическо парти" },
  { icon: "🎮", name: "Геймърско парти", badge: "Популярно" },
  { icon: "✈️", name: "Парти Самолети" },
  { icon: "🦖", name: "Парти Динозаври" },
  { icon: "🍄", name: "Парти Гномчета" },
  { icon: "⚽", name: "Футболно парти" },
  { icon: "🦈", name: "Акула парти" },
  { icon: "⛵", name: "Морско парти" },
  { icon: "🦸‍♂️", name: "SUPERHERO", badge: "Топ избор" },
  { icon: "🦁", name: "Сафари парти" },
  { icon: "🐒", name: "Джунгла парти" },
  { icon: "🐕", name: "Кучешко парти" },
  { icon: "🤠", name: "Каубойско парти" },
  { icon: "🚂", name: "Парти Влакче" },
  { icon: "🐻", name: "Парти Горско Мече" },
  { icon: "🎨", name: "Арт парти" },
  { icon: "🧱", name: "Лего парти" },
  { icon: "🦥", name: "Парти Ленивец" },
  { icon: "📚", name: "Парти за Първи учебен ден" },
];

function ThemesPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };
  const scrollToPrices = () => {
    window.location.hash = "#prices-birthday";
  };

  return (
    <div className="themes-page-bg">
      <div className="themes-container">
        <section className="themes-hero">
          <h1 className="themes-title">
            <span className="themes-emoji-icon">🎨</span>
            Избор на Тематична Украса
          </h1>
          <p className="themes-subtitle">
            Изберете любимата тема за вашето парти! Всяка украса включва балони,
            банери, чинийки, и много повече
          </p>
        </section>

        <section className="themes-category-section themes-girls-section">
          <div className="themes-category-header">
            <span className="themes-category-icon">👑</span>
            <h2 className="themes-category-title">Теми за Момичета</h2>
          </div>
          <div className="themes-grid">
            {GIRLS_THEMES.map((theme, i) => (
              <div key={`g-${i}`} className="themes-theme-card">
                <span className="themes-theme-icon">{theme.icon}</span>
                <h3 className="themes-theme-name">{theme.name}</h3>
                {theme.badge && (
                  <span className="themes-theme-badge">{theme.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="themes-category-section themes-boys-section">
          <div className="themes-category-header">
            <span className="themes-category-icon">🚀</span>
            <h2 className="themes-category-title">Теми за Момчета</h2>
          </div>
          <div className="themes-grid">
            {BOYS_THEMES.map((theme, i) => (
              <div key={`b-${i}`} className="themes-theme-card">
                <span className="themes-theme-icon">{theme.icon}</span>
                <h3 className="themes-theme-name">{theme.name}</h3>
                {theme.badge && (
                  <span className="themes-theme-badge">{theme.badge}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="themes-cta-section">
          <h3 className="themes-cta-title">Избрахте любима тема?</h3>
          <p className="themes-cta-text">
            Свържете се с нас, за да резервирате датата и да обсъдим всички
            детайли!
          </p>
          <div className="themes-cta-buttons">
            <button
              type="button"
              className="themes-cta-button"
              onClick={scrollToContacts}
            >
              Свържете се с нас
            </button>
            <button
              type="button"
              className="themes-cta-button themes-cta-button-secondary"
              onClick={scrollToPrices}
            >
              Виж цени и пакети
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemesPage;
