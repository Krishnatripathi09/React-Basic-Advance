import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>

        <div className="nav-items">
          <ul>
            <li href=""> Home </li>
            <li>About-Us </li>
            <li>Contact-Us </li>
            <li>Cart </li>
          </ul>
        </div>
      </div>
    </>
  );
};
