export const getCityWeather = async (cityName): Promise<Weather> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${cityName}&units=metric`
  )
  
  return request.json()
}