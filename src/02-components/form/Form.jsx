import Button from '../button/Button';

const Form = () => {
  return (
    <form className="form">
      <label className="form__label margin-bottom--xs" htmlFor="email">
        Your Email Address
      </label>
      <input className="form__input" id="email" type="email" name="email" placeholder="sample@sample.com" />
      <Button className="button button__rounded--right">Get started</Button>
    </form>
  );
};

export default Form;
