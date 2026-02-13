import "./Contacts.css";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Send, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Replace YOUR_EMAIL with your actual email address
    const formAction = "https://formsubmit.co/71ed0c1c49c7b228eaca7808ccb0944a";

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      // Add a subject line
      formDataToSend.append("_subject", "Ново запитване от 1001 усмивки");

      // Prevent FormSubmit from showing a redirect page
      if (typeof window !== "undefined") {
        formDataToSend.append("_next", window.location.href);
      }
      formDataToSend.append("_captcha", "false");

      const response = await fetch(formAction, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setFormSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          city: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setSubmitError(
        "Възникна грешка при изпращането. Моля, опитайте отново или се свържете директно.",
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacts" className="contacts-section">
      <div className="contacts-container">
        {!formSubmitted ? (
          <>
            <h1 className="contacts-title">
              Изпратете запитване за вашето събитие
            </h1>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/71ed0c1c49c7b228eaca7808ccb0944a"
              method="POST"
              className="contact-form"
            >
              {/* Hidden inputs for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="Ново запитване от 1001 усмивки"
              />
              <input
                type="hidden"
                name="_next"
                value={
                  typeof window !== "undefined" ? window.location.href : ""
                }
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <div className="contact-item">
                <label htmlFor="name" className="contact-label">
                  Име и фамилия <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-input editable"
                />
              </div>

              <div className="contact-item">
                <label htmlFor="email" className="contact-label">
                  Имейл <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-input editable"
                />
              </div>

              <div className="contact-item">
                <label htmlFor="phone" className="contact-label">
                  Телефонен номер
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="contact-input editable"
                />
              </div>

              <div className="contact-item">
                <label htmlFor="message" className="contact-label">
                  Вашето съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input editable contact-textarea"
                />
              </div>

              {submitError && (
                <div className="contact-error">
                  <p>{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    Изпращане...
                    <Loader2 className="icon-spin" />
                  </>
                ) : (
                  <>
                    Изпрати запитване
                    <Send className="icon" />
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="contact-success">
            <div className="success-icon">
              <Check className="icon-large" />
            </div>
            <h3 className="success-title">Благодарим за запитването!</h3>
            <p className="success-message">
              Ще се свържем с вас в рамките на 24 часа.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
