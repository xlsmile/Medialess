import { google, slack, atlassian, dropbox, shopify } from './partners';

const Partnership = () => {
  return (
    <nav className="partnership">
      <ul className="partnership__list">
        <li className="partnership__list-item">
          <a className="partnership__list-link" href="/">
            <img className="partnership__list-image" src={google} alt={`${google} logo`} />
          </a>
        </li>
        <li className="partnership__list-item">
          <a className="partnership__list-link" href="/">
            <img className="partnership__list-image" src={slack} alt={`${slack} logo`} />
          </a>
        </li>
        <li className="partnership__list-item">
          <a className="partnership__list-link" href="/">
            <img className="partnership__list-image" src={atlassian} alt={`${atlassian} logo`} />
          </a>
        </li>
        <li className="partnership__list-item">
          <a className="partnership__list-link" href="/">
            <img className="partnership__list-image" src={dropbox} alt={`${dropbox} logo`} />
          </a>
        </li>
        <li className="partnership__list-item">
          <a className="partnership__list-link" href="/">
            <img className="partnership__list-image" src={shopify} alt={`${shopify} logo`} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Partnership;
