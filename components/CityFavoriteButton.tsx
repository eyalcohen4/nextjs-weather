import { useUser } from '../use-user'

function CityFavoriteButton({ city }: { city: City }) {
  const { favoritesIds, markAsFavorite, status } = useUser()

  const isFavorite = favoritesIds?.includes(city.id)
  return (
    <button
      className="city-favorite-button"
      onClick={() => markAsFavorite(city.id)}
      style={{ backgroundColor: isFavorite ? 'red' : 'blue' }}
    >
      {status === 'loading'
        ? 'Loading...'
        : isFavorite
        ? `Remove ${city.name} from favorites`
        : `Mark ${city.name} as favorite`}
    </button>
  )
}

export default CityFavoriteButton
