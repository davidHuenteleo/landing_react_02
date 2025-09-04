import "./Footer.css";

const Footer = () => {
   return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita nuestra página de Facebook">
              <span className="icon">📘</span>
          </a>

            <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita nuestra página de Facebook">
             <span className="icon">🐦</span>
          </a>

            <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita nuestra página de Facebook">
             <span className="icon">🐦</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
