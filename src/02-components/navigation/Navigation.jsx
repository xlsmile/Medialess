import { navList } from '../../data';
import Button from '../button/Button';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__group">
        <ul className="list list--pages">
          {navList.map((listitem) => (
            <li className="list__item" key={listitem.id}>
              <a className="list__link" href={listitem.href}>
                {listitem.text}
              </a>
            </li>
          ))}
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
