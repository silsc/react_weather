import './results.scss';
import clear from "../../assets/images/clear.png";
import cloudy from "../../assets/images/cloudy.png";
import rain from "../../assets/images/rain.png";
import snow from "../../assets/images/snow.png";
import world from "../../assets/images/world.png";

function Results({weather, date}) {
  let todayweather;
  let bgImg;
  if(weather.weather[0].main === "Clouds") {
    todayweather = "Cloudy";
    bgImg = cloudy;
  } else if (weather.weather[0].main === "Clear"){
    todayweather = "Sunny";
    bgImg = clear;
  } else if (weather.weather[0].main === "Rain") {
    todayweather = "Raining";
    bgImg = rain;
  } else if (weather.weather[0].main === "Snow") {
    todayweather = "Snowing";
    bgImg = snow;
  } else if (weather.weather[0].main === "Thunderstorm") {
    todayweather = "Thunderstorm";
    bgImg = snow;
  } else {
    todayweather = "Dangerous";
    bgImg = world;
  }

  return (
    <div className="results">
      <div className="results-info">
        <h2 className="location">{weather.name}, {weather.sys.country}</h2>
        <h3 className="date">{date}</h3>
      </div>
      <div className="weather" style={{width: "300px", height: "200px" ,backgroundImage: `url(${bgImg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
        <h2 className="weather-temp">{Math.round(weather.main.temp)}ºC</h2>
      </div>
      <div className="today">
        <p>Today: {todayweather}</p>
      </div>
    </div>
  );
}

export default Results;