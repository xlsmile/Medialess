const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__group">
        <ul className="list">
          <li className="list__item">
            <a className="list__link" href="/">
              AIW
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">
              Home
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">
              What is AIW
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">
              Open AI
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">
              Case studies
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">
              Library
            </a>
          </li>
        </ul>
        <ul className="list">
          <li className="list__item">
            <button>Sign in</button>
          </li>
          <li className="list__item">
            <button>Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
