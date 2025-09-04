
import "./About.css";

import ABOUT_IMAGE  from "../../assets/about.webp"

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About</h2>

      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src={ABOUT_IMAGE}
            alt="About VastuSpaze"
            className="about-image"
          />
        </div>

        <p className="about-text">
          At VastuSpaze, we believe in transforming houses into dream homes.
          With a passion for design and a commitment to quality, our team of
          skilled professionals has been dedicated to delivering exceptional
          renovation services for over a decade. We specialize in creating
          beautiful, functional spaces that reflect our clients’ unique tastes
          and lifestyles. From modern kitchens and luxurious bathrooms to serene
          outdoor living areas and cozy home offices, we bring our expertise to
          every project, ensuring each renovation is tailored to meet your
          specific needs and desires. Our mission is to enhance the beauty and
          functionality of your home, making it a place where you can truly
          thrive.
        </p>
      </div>
    </section>
  );
};

export default About;
