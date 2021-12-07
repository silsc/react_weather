import './searchbox.scss';
import { FiSearch } from "react-icons/fi";

function Searchbox(props) {
  return (
      <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search your city..."
          onChange={e => props.setquery(e.target.value)}
          value={props.query}
          onKeyPress={props.search}
        />
        <FiSearch className="search-icon"/>
      </div>
  );
}

export default Searchbox;