import "./AboutUs.css";
import { MapPin, Phone, Mail, Clock, Facebook } from "lucide-react";

function AboutUs() {
  const address = "гр. Перник, ул. Волга 28";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section id="about-us" className="about-us-section">
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
