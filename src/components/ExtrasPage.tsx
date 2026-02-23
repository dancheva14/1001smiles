import { useState } from "react";
import "./ExtrasPage.css";
import { Minus, Plus, ChevronDown } from "lucide-react";

interface PriceRow {
  label: string;
  priceEur: string;
  priceBgn: string;
}

interface ExtrasPricingCardProps {
  title: string;
  priceFrom?: boolean;
  singlePriceEur?: string;
  singlePriceBgn?: string;
  priceRows?: PriceRow[];
  disclaimer?: string;
}

function ExtrasPricingCard({
  title,
  priceFrom,
  singlePriceEur,
  singlePriceBgn,
  priceRows,
  disclaimer,
}: ExtrasPricingCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="extras-pricing-card">
      <div className="extras-pricing-card-header">
        <h3 className="extras-pricing-card-title">{title}</h3>
        <button
          type="button"
          className="extras-pricing-card-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Свий" : "Разгъни"}
        >
          {expanded ? (
            <Minus
              className="extras-toggle-icon extras-toggle-icon-minus"
              size={16}
            />
          ) : (
            <Plus className="extras-toggle-icon" size={16} />
          )}
        </button>
      </div>
      {expanded && (
        <>
          {singlePriceEur !== undefined && singlePriceBgn !== undefined && (
            <div className="extras-pricing-card-price">
              {priceFrom && <span className="extras-price-from">от </span>}
              <span className="extras-price-eur">{singlePriceEur} €</span>
              <span className="extras-price-bgn">{singlePriceBgn}</span>
            </div>
          )}
          {priceRows && priceRows.length > 0 && (
            <div className="extras-price-rows">
              {priceRows.map((row, index) => (
                <div key={index} className="extras-price-row">
                  <span className="extras-duration-pill">{row.label}</span>
                  <div className="extras-price-row-values">
                    <span className="extras-price-eur">{row.priceEur} €</span>
                    <span className="extras-price-bgn">{row.priceBgn}</span>
                  </div>
                  {index < priceRows.length - 1 && (
                    <div className="extras-price-row-divider" />
                  )}
                </div>
              ))}
            </div>
          )}
          {(singlePriceEur !== undefined ||
            (priceRows && priceRows.length > 0)) && (
            <div className="extras-pricing-card-divider" />
          )}
          {disclaimer && (
            <p className="extras-pricing-disclaimer">{disclaimer}</p>
          )}
        </>
      )}
    </div>
  );
}

function ExtrasPage() {
  return (
    <section className="extras-page-section">
      <div className="extras-page-container">
        <div className="extras-text-row">
          <h2 className="extras-heading">Допълнителни услуги</h2>
          <div className="extras-text-content">
            <p className="extras-paragraph">
              За да направим всяко събитие още по-специално, предлагаме набор от
              допълнителни услуги и партньорски решения, които ще превърнат
              празника в незабравимо изживяване. Работим с доверени партньори,
              които осигуряват <strong>високо качество</strong> и{" "}
              <strong>професионализъм</strong>, за да гарантираме, че всяка част
              от организацията ни е перфектна.
            </p>
          </div>
        </div>
        <div className="extras-cards-grid">
          <div className="extras-cards-column">
            <ExtrasPricingCard
              title="Такса при удължаване на празника"
              priceRows={[
                { label: "30 мин.", priceEur: "30.67", priceBgn: "60 лв." },
                { label: "60 мин.", priceEur: "51.13", priceBgn: "100 лв." },
              ]}
              disclaimer="ако залата не е резервирана непосредствено след Вашето парти"
            />
            <ExtrasPricingCard
              title="Такса Външна декорация"
              singlePriceEur="30"
              singlePriceBgn="58,67 лв."
            />
          </div>
          <div className="extras-cards-column">
            <ExtrasPricingCard
              title="Фотографски услуги"
              priceRows={[
                { label: "60 мин.", priceEur: "81.81", priceBgn: "160 лв." },
                { label: "90 мин.", priceEur: "97.14", priceBgn: "190 лв." },
              ]}
              disclaimer="или по договаряне"
            />
            <ExtrasPricingCard
              title="Тематична декорация"
              priceFrom
              singlePriceEur="46.02"
              singlePriceBgn="90 лв."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtrasPage;
