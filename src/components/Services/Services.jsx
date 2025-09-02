import { SERVICES_CONTENT } from "../../utils"
import "./Services.css"


import "./Services.css";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Home Renovation Services</h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="service-card">
            <div
              className={`service-image-wrapper ${
                index % 2 === 0 ? "" : "order-lg-2"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>

            <div
              className={`service-info ${
                index % 2 === 0 ? "padding-left-lg" : "padding-right-lg"
              }`}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services