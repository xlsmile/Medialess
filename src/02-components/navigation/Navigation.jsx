import { navList } from '../../data';
import Button from '../button/Button';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__group">
        <ul className="list list--pages">
          {navList.map((listitem) => (
            // if first item in the array => add "list__link--logo" class
            <li className="list__item" key={listitem.id}>
              <a className="list__link" href={listitem.href}>
                {listitem.text}
              </a>
            </li>
          ))}

          {/* <li className="list__item">
            <a className="list__link list__link--logo" href="#header">
              AIO
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#info">
              What is AIO
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
          <li className="list__item">
            <a className="list__link" href="/">
              Contacts
            </a>
          </li> */}
        </ul>
        <ul className="list list--sign">
          <li className="list__item">
            <Button className="button button__in button__rounded">Sign in</Button>
          </li>
          <li className="list__item">
            <Button className="button button__rounded">Sign up</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
