interface City {
  name: string
  id: number
  slug: string
  country: string;
  coordinates: Coords
}

interface Coords {
  long: string
  lat: string
}

interface Weather {
  current: CurrentWeather
}

interface CurrentWeather {
  weather_icons: string[]
  weather_descriptions: string
  wind_speed: number
  humidity: number
  temperature: number
}

interface UserContextState {
  name: string
  status: string
  favoritesIds: number[]
  markAsFavorite: Function
}
