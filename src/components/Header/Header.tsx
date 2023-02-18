import "components/Header/Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="name-heading">Thomas Hardy</h1>
      <p className="short-description">React Developer</p>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
