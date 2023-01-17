import Button from '../button/Button';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h2>Do you want to step in to the future before others</h2>
      <Button className="button button__rounded--hollow">Request Early Access</Button>

      <div className="footer__navigation-intro">
        <h4>AIO</h4>
        <p>Bla-bla-bla-bla-bla</p>
      </div>
      <div>
        <h5 className="list-title">Links</h5>
        <ul className="list">
          <li>
            <a href="/" className="list__link">
              Overons
            </a>
          </li>
          <li>
            <a href="/" className="list__link">
              Social meida
            </a>
          </li>
          <li>
            <a href="/" className="list__link">
              Counters
            </a>
          </li>
          <li>
            <a href="/" className="list__link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="list-title">Company</h5>
        <ul className="list">
          <li>
            <a href="/" className="list__link">
              Terms & conditions
            </a>
          </li>
          <li>
            <a href="/" className="list__link">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="/" className="list__link">
              Whatever
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="list-title">Get in touch</h5>
        <ul className="list">
          <li>Lorem ipsum dolor sit.</li>
          <li>085-20923-87</li>
          <li>
            <a href="mailto:info@info.com" className="list__link">
              info@info.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
