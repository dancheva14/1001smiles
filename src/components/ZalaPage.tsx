import "./ZalaPage.css";

const HALL_IMAGES = {
  hero: "/images/Hall/kidscenter1.jpg",
  galleryTall: "/images/Hall/kidscenter2.jpg",
  gallery1: "/images/Hall/kidscnter.jpg",
  gallery2: "/images/Hall/kidscenter1.jpg",
};

function ZalaPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };
  const scrollToPrices = () => {
    window.location.hash = "#prices-birthday";
  };

  return (
    <div className="zala-page-bg">
      <section className="zala-hero-band">
        <div>
          <h1 className="zala-page-title">
            Нашата зала –
            <br />
            приказно пространство
            <br />
            за вашите деца
          </h1>
          <p className="zala-page-subtitle">
            Просторна, безопасна и изпълнена с цветове и усмивки
          </p>
          <div className="zala-intro-box">
            <p>
              Нашата зала е специално проектирана с мисъл за децата – светло,
              просторно и безопасно пространство, в което всяко дете може да се
              изяви, да твори и да играе свободно. Стените са украсени с живи
              цветове и приказни мотиви, а всеки ъгъл е обмислен до детайл.
            </p>
            <p>
              Залата разполага с над <strong>120 кв.м.</strong> игрово и парти
              пространство, оборудвано с модерни мебели, безопасни покрития и
              богат избор от игри и занимания за деца от всички възрасти.
            </p>
            <p>
              Всяко събитие превръщаме в незабравимо преживяване – от
              декорацията и кетъринга до музиката и анимацията. Вие се
              наслаждавате, ние се грижим за всичко останало.
            </p>
          </div>
          <div className="zala-feature-pills">
            <div className="zala-pill">🛡️ Безопасни покрития</div>
            <div className="zala-pill">🌡️ Климатизирана</div>
            <div className="zala-pill">♿ Достъпна среда</div>
            <div className="zala-pill">🚗 Паркинг</div>
            <div className="zala-pill">🎵 Аудио система</div>
            <div className="zala-pill">📡 Безплатен Wi-Fi</div>
          </div>
        </div>
        <div className="zala-hero-right">
          <div className="zala-hero-photo">
            <img src={HALL_IMAGES.hero} alt="Детска зала 1001 усмивки" />
            <div className="zala-hero-photo-badge">
              📍 гр. Перник, ул. Волга 28
            </div>
          </div>
          <div className="zala-stats-row">
            <div className="zala-stat-card">
              <div className="zala-stat-num">120+</div>
              <div className="zala-stat-lbl">кв.м. пространство</div>
            </div>
            <div className="zala-stat-card">
              <div className="zala-stat-num">50</div>
              <div className="zala-stat-lbl">места за гости</div>
            </div>
            <div className="zala-stat-card">
              <div className="zala-stat-num">8г.</div>
              <div className="zala-stat-lbl">опит и любов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="zala-gallery-section">
        <div className="zala-section-label">
          <h2>
            Разгледайте <span>залата</span>
          </h2>
          <div className="zala-label-line" />
        </div>
        <div className="zala-gallery-grid">
          <div className="zala-gal-card zala-gal-tall">
            <img
              src={HALL_IMAGES.galleryTall}
              alt="Детска зала – игрова зона"
            />
            <div className="zala-gal-overlay" />
            <div className="zala-gal-caption">
              🎨 Игрова зона за малки и големи
            </div>
          </div>
          <div className="zala-gal-card zala-gal-col">
            <img src={HALL_IMAGES.gallery1} alt="Детска зала – уютна среда" />
            <div className="zala-gal-overlay" />
            <div className="zala-gal-caption">
              🌿 Уютна и вдъхновяваща среда
            </div>
          </div>
          <div className="zala-gal-card zala-gal-col">
            <img src={HALL_IMAGES.gallery2} alt="Детска зала – активна игра" />
            <div className="zala-gal-overlay" />
            <div className="zala-gal-caption">🏃 Активни игри и движение</div>
          </div>
        </div>
      </section>

      <section className="zala-details-section">
        <div className="zala-section-label" style={{ marginBottom: "28px" }}>
          <h2>
            Оборудване и <span>удобства</span>
          </h2>
          <div className="zala-label-line" />
        </div>
        <div className="zala-details-grid">
          <div className="zala-detail-card">
            <div className="zala-detail-icon">🎮</div>
            <h3>Игрово оборудване</h3>
            <ul>
              <li>Катерушки и скала за катерене</li>
              <li>Меки модули и топки</li>
              <li>Ролеви игри (кухня, магазин)</li>
              <li>Конструктори и пъзели</li>
              <li>Кът за рисуване и творчество</li>
            </ul>
          </div>
          <div className="zala-detail-card">
            <div className="zala-detail-icon">🎉</div>
            <h3>Парти съоръжения</h3>
            <ul>
              <li>Парти маса с 50 места</li>
              <li>Проектор и екран</li>
              <li>Аудио система с Bluetooth</li>
              <li>Хладилник и кухненски бокс</li>
              <li>Декоративно осветление</li>
            </ul>
          </div>
          <div className="zala-detail-card">
            <div className="zala-detail-icon">🛡️</div>
            <h3>Безопасност и комфорт</h3>
            <ul>
              <li>Меки подови настилки</li>
              <li>Климатик и вентилация</li>
              <li>Обособен кът за родители</li>
              <li>Санитарен възел за деца</li>
              <li>Видеонаблюдение</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="zala-cta-wrap">
        <div className="zala-cta-strip">
          <div className="zala-cta-strip-left">
            <h2>🎈 Готови ли сте да резервирате залата?</h2>
            <p>
              Свържете се с нас и ще ви помогнем да организирате
              <br />
              незабравимото събитие за вашето дете!
            </p>
          </div>
          <div className="zala-cta-strip-right">
            <button
              type="button"
              className="zala-btn-white"
              onClick={scrollToContacts}
            >
              📞 Резервирай сега
            </button>
            <button
              type="button"
              className="zala-btn-outline-white"
              onClick={scrollToPrices}
            >
              🎁 Виж пакети и цени
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZalaPage;
