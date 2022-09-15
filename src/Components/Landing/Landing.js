import "./landing.scss";

import FadeIn from "react-fade-in";

import world from "../../assets/images/world.png";
import Searchbox from "../Searchbox/Searchbox";

function Landing(props) {
  return (
    <FadeIn>
      <div className="landing">
        <div className="hero">
          <div className="hero-title">
            <h1>Weather</h1>
            <h1>today</h1>
          </div>
          <FadeIn delay={500}>
            <div className="hero-img-wrapper">
              <img src={world} alt="World" className="hero-img" />
            </div>
          </FadeIn>
          <div className="search">
            <h2>Check the current weather</h2>
            <Searchbox
              search={props.search}
              query={props.query}
              setquery={props.setquery}
            />
          </div>
        </div>
        <FadeIn delay={800}>
          <div className="landing-date">
            <h3 className="landing-date-title">Today is</h3>
            <h3>{props.date}</h3>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
}

export default Landing;
