import logo from "../assets/images/logo-mark.svg";
const Header: React.FC = () => {
  return (
    <header>
      <div className="Coding"></div>
      <span></span>
      <img src={logo} alt="Logo" className=" head" />
      <h3>Coding Conf</h3>
    </header>
  );
};
export default Header;
