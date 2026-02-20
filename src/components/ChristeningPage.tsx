import "./ChristeningPage.css";

function ChristeningPage() {
  return (
    <section className="christening-page-section">
      <div className="christening-page-container">
        <div className="christening-content-left">
          <h2 className="christening-heading">Кръщене</h2>
          <div className="christening-text-content">
            <p className="christening-paragraph">
              Ние ще се погрижим за всичко необходимо, за да можете Вие и Вашите
              гости да се насладите на празника без излишни притеснения.
              Предлагаме цялостна организация, включваща стилна тематична
              декорация, празнична украса според Вашите предпочитания, богато
              кетъринг меню с разнообразни храни и напитки за малки и големи,
              както и уютна и модерна обстановка, подходяща за семейни
              тържества.
            </p>
            <p className="christening-paragraph">
              Нашият екип ще съдейства при планирането на всеки детайл – от
              подредбата на залата до избора на цветове, украса и допълнителни
              елементи, така че празникът да бъде напълно съобразен с Вашите
              желания и стил.
            </p>
            <p className="christening-paragraph">
              <b>
                За изготвяне на индивидуална оферта и повече информация, моля
                свържете се с нас. Ще се радваме да превърнем този важен ден в
                красив и незабравим празник.
              </b>
            </p>
          </div>
        </div>
        <div className="christening-content-right">
          <div className="christening-images-container">
            <img
              src="/images/krustene.jpg"
              alt="Кръщене"
              className="christening-image"
            />
            <img
              src="/images/krustene4.jpg"
              alt="Кръщене"
              className="christening-image"
            />
            <img
              src="/images/krustene3.jpg"
              alt="Кръщене"
              className="christening-image"
            />
            <img
              src="/images/krustene2.jpg"
              alt="Кръщене"
              className="christening-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChristeningPage;
