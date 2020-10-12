export const getCityWeather = async (cityName): Promise<Weather> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
  const request = await fetch(
    `http://api.weatherstack.com/forecast?access_key=${apiKey}&query=${cityName}`
  )
  
  return request.json()
}