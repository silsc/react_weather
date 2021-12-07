import './landing.scss';
import world from "../../assets/images/world.png"
import Searchbox from '../Searchbox/Searchbox';

function Landing(props) {
  return (
    <div className="landing">
      <div className="hero">
        <div className="hero-title">
          <h1>Weather</h1>
          <h1>today</h1>
        </div>
        <img src={world} alt="World" className="hero-img"/>
        <div className="hero-date">
          <h3>Today is</h3> 
          <h3>{props.date}</h3> 
        </div>
      </div>
      <div className="search">
        <h2>Check the current weather</h2>
        <Searchbox search={props.search} query={props.query} setquery={props.setquery}/>
      </div>
    </div>
  );
}

export default Landing;