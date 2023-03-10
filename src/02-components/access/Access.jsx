import possibility from '../../assets/possibility.png';
import Button from '../button/Button';

const Access = () => {
  return (
    <section className="access" id="access">
      <header className="access__header">
        <h2 className="access__title">Request Early Access to Get Started</h2>
        <h3 className="access__titlesub">The possibilities are beyond your imagination</h3>
        <p className="access__text">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
      </header>
      <div className="access__image">
        <img src={possibility} alt="" />
        <Button className="button button__rounded">
          <i className="fab fa-btc"></i>
          My apps
        </Button>
      </div>
    </section>
  );
};

export default Access;
