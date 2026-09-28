
import './Footer.css';

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-logo">Divine.</p>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} Mado Divine. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="https://linkedin.com/in/mado-divine" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <LinkedinIcon className="footer-icon" />
            </a>
            <a href="https://github.com/Madooski" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <GithubIcon className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
