import { google, slack, atlassian, dropbox, shopify } from './partners';

const Partnership = () => {
  return (
    <div className="partnership">
      <img src={google} alt={`${google} logo`} />
      <img src={slack} alt={`${slack} logo`} />
      <img src={atlassian} alt={`${atlassian} logo`} />
      <img src={dropbox} alt={`${dropbox} logo`} />
      <img src={shopify} alt={`${shopify} logo`} />
    </div>
  );
};

export default Partnership;
