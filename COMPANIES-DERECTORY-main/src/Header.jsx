import logo from "./assets/logo.jpeg";
import "./Header.css";


function Header(){
  return<>
  <header>
<div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
</div>
      <div>
        <h1>Companies Directory</h1>
      </div>
      </header>
  </>
}
export default Header;