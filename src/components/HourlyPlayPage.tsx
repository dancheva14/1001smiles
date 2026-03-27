import "./HourlyPlayPage.css";
import { ChevronDown } from "lucide-react";

const BENEFITS = [
  "Безопасна и уютна среда за децата",
  "Забавни игри и занимания под наблюдение",
  "Време за теб – кафе, спокойствие и глътка въздух",
];

function HourlyPlayPage() {
  const scrollToContacts = () => {
    window.location.hash = "#contacts";
  };

  return (
    <section className="hourly-play-page-section">
      <div className="hourly-play-page-container">
        <div className="hourly-play-content-left">
          <h2 className="hourly-play-heading">Почасова игра</h2>
          <div className="hourly-play-text-content">
            <p className="hourly-play-paragraph">
              Мамо, ти също имаш нужда от почивка…
            </p>
            <p className="hourly-play-paragraph">
              Знам колко изтощително е ежедневието с дете – безкрайни задачи,
              грижи и почти никакво време за теб. Именно затова създадохме
              място, специално за майки като теб 💛
            </p>
            <div className="hourly-play-benefits-box">
              <div className="hourly-play-benefits-title">
                ✨ Детски център с почасова игра:
              </div>
              <ul className="hourly-play-benefits-list">
                {BENEFITS.map((benefit) => (
                  <li key={benefit}>✔️ {benefit}</li>
                ))}
              </ul>
            </div>
            <div className="hourly-play-price-box">
              <span className="hourly-play-price-label">Цена:</span>
              <span className="hourly-play-price-value">5 €</span>
              <span className="hourly-play-price-unit">за 1 час</span>
            </div>
            <p className="hourly-play-paragraph">
              Подари си 1–2 часа спокойствие, докато твоето дете играе и се
              забавлява 🧸
            </p>
            <p className="hourly-play-paragraph">
              💬 Направи тест и се увери сама – защото и ти го заслужаваш.
            </p>
          </div>
          <button
            type="button"
            className="hourly-play-consultation-btn"
            onClick={scrollToContacts}
          >
            ЗАЯВИ КОНСУЛТАЦИЯ
            <ChevronDown className="hourly-play-btn-icon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HourlyPlayPage;
