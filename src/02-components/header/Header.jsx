import people from '../../assets/people.png';
import head from '../../assets/head.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__blurb">
        <h1>Let's Build Something amazing with AIO AI Open</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
          way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <form>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" type="email" name="email" placeholder="Your Email Address" />
          <button type="submit">Get started</button>
        </form>
        <div>
          <img className="margin-bottom--sm" src={people} alt="users avatars" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__illustration">
        <img className="header__image" src={head} alt="ai head illustration" />
      </div>
    </header>
  );
};

export default Header;
