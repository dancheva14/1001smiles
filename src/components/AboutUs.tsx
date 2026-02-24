import "./AboutUs.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function AboutUs() {
  const address = "гр. Перник, ул. Волга 28";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-content">
        <h1 className="about-us-header">
          Добре дошли в детски парти център 1001 усмивки 💛
        </h1>
        <div className="about-us-text">
          <p>
            Тук детските очи блестят, смехът звучи най-искрено, а всеки празник
            се превръща в красив спомен.
          </p>
          <p>
            В детски парти център 1001 усмивки създадохме уютно и спокойно
            пространство, изпълнено с топлина и радост. Място, където децата
            могат да играят безгрижно, а родителите да се отпуснат и да се
            насладят на щастието им.
          </p>
          <p>
            Нашата мисия е проста и истинска – да радваме, да усмихваме и да
            създаваме моменти, които остават в сърцето.
          </p>
          <p className="about-us-subhead">При нас ще откриете 🤍</p>
          <ul className="about-us-list">
            <li>
              Нежна атмосфера, внимание към всеки детайл и лично отношение към
              всяко семейство.
            </li>
            <li>Два часа, изпълнени с игри, смях и споделена радост.</li>
            <li>
              Пространство, в което празниците се случват спокойно, красиво и с
              много любов.
            </li>
          </ul>
          <p className="about-us-subhead">Организираме с грижа и сърце 🎀</p>
          <ul className="about-us-events">
            <li>🌸 Рождени дни</li>
            <li>🌸 Погачи</li>
            <li>🌸 Партита за разкриване пола на бебе</li>
            <li>🌸 Именни дни</li>
            <li>🌸 Специални тематични празници</li>
          </ul>
          <p>
            Всеки празник при нас е създаден с внимание, нежност и желание да
            подарим не просто събитие, а истинско преживяване.
          </p>
          <p>
            В детски парти център 1001 усмивки вярваме, че най-ценни са моментите,
            прекарани заедно.
          </p>
          <p>
            Затова сме тук – за да превърнем всеки повод в усмивка. И не само
            една, а цели 1001. 💛
          </p>
        </div>
      </div>

      <div className="about-us-container">
        <div className="contact-info-column">
          <div className="contact-info-item">
            <div className="contact-icon">
              <MapPin className="icon" />
            </div>
            <div className="contact-details">
              <h3 className="contact-heading">Адрес</h3>
              <p className="contact-text">{address}</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Phone className="icon" />
            </div>
            <div className="contact-details">
              <h3 className="contact-heading">Телефон</h3>
              <p className="contact-text">0893 53 50 84</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Mail className="icon" />
            </div>
            <div className="contact-details">
              <h3 className="contact-heading">E-mail</h3>
              <p className="contact-text">1001smiles@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Clock className="icon" />
            </div>
            <div className="contact-details">
              <h3 className="contact-heading">Работно време</h3>
              <div className="contact-text">
                <p>ОТ ПОНЕДЕЛНИК ДО ПЕТЪК ОТ 11:00ч ДО 18:00Ч</p>
                <p>
                  за разглеждане на центъра и за уточняване на заявки за
                  предстоящи празници
                </p>
                <p>СЪБОТА И НЕДЕЛЯ от 10:00ч до 18:00ч</p>
                <p>
                  за разглеждане на клуба и за уточняване на заявки за
                  предстоящи празници
                </p>
                <p>ОТ ПОНЕДЕЛНИК ДО НЕДЕЛЯ ОТ 10:00ч до 21:00ч</p>
                <p>за провеждане на празници</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-column">
          <iframe
            className="google-map"
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
