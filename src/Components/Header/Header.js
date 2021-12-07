import './header.scss';
import logo from "../../assets/images/logo.png";
import Searchbox from "../Searchbox/Searchbox"

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo"/>
      {(props.weather) ? (
      <Searchbox search={props.search} query={props.query} setquery={props.setquery}/>)
      : ("")}
    </div>
  );
}

export default Header;