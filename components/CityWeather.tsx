function CityWeather({ weather }: { weather: Weather }) {
  return (
    <div className="city-weather">
      <div>
        <p>{weather.main.temp}</p>
        <p>
          <b>Temperature</b>
        </p>
      </div>
      <div>
        <p>{weather.main.humidity}</p>
        <p>
          <b>Humdity</b>
        </p>
      </div>
      <div>
        <p>{weather.wind.speed}</p>
        <p>
          <b>Wind Speed</b>
        </p>
      </div>
    </div>
  )
}

export default CityWeather
