import Button from '../button/Button';

const Footer = () => {
  return (
    <footer className="footer__main">
      <h2>Do you want to step in to the future before others</h2>
      <Button className="button button__rounded--hollow">Request Early Access</Button>
      <div>
        <h4>AIO</h4>
        <p>Bla-bla-bla-bla-bla</p>
      </div>
      <div>
        <h5>Links</h5>
        <ul>
          <li>
            <a href="/">Overons</a>
          </li>
          <li>
            <a href="/">Social meida</a>
          </li>
          <li>
            <a href="/">Counters</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul>
          <li>
            <a href="/">Terms & conditions</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Whatever</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Get in touch</h5>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>085-20923-87</li>
          <li>
            <a href="mailto:info@info.com">info@info.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
