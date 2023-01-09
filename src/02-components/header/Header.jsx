const Header = () => {
  return (
    <header className="header">
      <h1>Let’s Build Something amazing with AIO AI Open</h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way
        everything joy alteration boisterous the attachment. Party we years to order allow asked of.
      </p>
      <form>
        <label htmlFor="email">Your Email Address</label>
        <input id="email" type="email" name="email" placeholder="Your Email Address" />
        <button type="submit">Get started</button>
      </form>
      <div>
        <img src="/" alt="users avatars" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      <img src="/" alt="ai head illustration" />
    </header>
  );
};

export default Header;
