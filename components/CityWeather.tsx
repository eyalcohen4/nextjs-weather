function CityWeather({ weather }: { weather: Weather }) {
  return (
    <div className="city-weather">
      <div>
        <p>{weather.current.temperature}</p>
        <p>
          <b>Temperature</b>
        </p>
      </div>
      <div>
        <p>{weather.current.humidity}</p>
        <p>
          <b>Humdity</b>
        </p>
      </div>
      <div>
        <p>{weather.current.wind_speed}</p>
        <p>
          <b>Wind Speed</b>
        </p>
      </div>
    </div>
  )
}

export default CityWeather
