import { CONTACT_INFO } from "../../utils/index"
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">{CONTACT_INFO.text}</p>

        <div className="contact-list">

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">{CONTACT_INFO.phone.label}</p>
              <p className="contact-value">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

        <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">{CONTACT_INFO.phone.label}</p>
              <p className="contact-value">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

            <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">{CONTACT_INFO.phone.label}</p>
              <p className="contact-value">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;
