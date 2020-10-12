interface City {
  name: string
  id: number
  slug: string
  country: string
  coordinates: Coords
}

interface Coords {
  long: string
  lat: string
}

interface Weather {
  main: {
    humidity: number
    temp: number
  }
  wind: {
    speed: number
  }
}

interface UserContextState {
  name: string
  status: string
  favoritesIds: number[]
  markAsFavorite: Function
}
