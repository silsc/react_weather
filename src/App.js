import { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Results from './Components/Results/Results';

const api = {
  key: "b167d6816c5979499f7025a7149d9c3e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery("");
        setWeather(result);
        console.log(result);
      });
    }
  }
  const dateBuilder = ((d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  })

  return (
    <div className="App">
      <Header weather={weather} search={search} query={query} setquery={setQuery} />
      {(!weather) ? (
          <Landing search={search} query={query} setquery={setQuery} date={dateBuilder(new Date())}/>)
          : (
            <Results weather={weather} date={dateBuilder(new Date())}/>
          )}
      <Footer />
    </div>
  );
}

export default App;
