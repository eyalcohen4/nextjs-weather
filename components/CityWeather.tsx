function CityWeather({ weather }: { weather: Weather }) {
  return (
    <div className="city-weather">
      <div>
        <p>{weather?.main?.temp || "NA"}</p>
        <p>
          <b>Temperature</b>
        </p>
      </div>
      <div>
        <p>{weather?.main?.humidity || "NA"}</p>
        <p>
          <b>Humdity</b>
        </p>
      </div>
      <div>
        <p>{weather?.wind?.speed || "NA"}</p>
        <p>
          <b>Wind Speed</b>
        </p>
      </div>
    </div>
  )
}

export default CityWeather
