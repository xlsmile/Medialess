import Button from '../button/Button';

const Cta = () => {
  return (
    <div className="cta">
      <span className="dvd">
        <h5 className="cta__title">Request Early Access to Get Started</h5>
        <p className="cta__text">Register today & start exploring the endless possiblities.</p>
      </span>
      <Button className="button button__rounded--cta">Get started</Button>
    </div>
  );
};

export default Cta;
