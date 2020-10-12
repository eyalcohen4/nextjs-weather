import { useUser } from '../use-user'

function CityFavoriteButton({ city }: { city: City }) {
  const { favoritesIds, markAsFavorite, status } = useUser()
  const isFavorite = favoritesIds?.includes(city.id)

  return (
    <button
      className="city-favorite-button"
      onClick={() => markAsFavorite(city.id)}
      style={{ background: isFavorite ? '#ed1c00' : '#0763f7' }}
    >
      <b>
        {status === 'loading'
          ? 'Loading...'
          : isFavorite
          ? `Remove ${city.name} from favorites`
          : `Mark ${city.name} as favorite`}
      </b>
    </button>
  )
}

export default CityFavoriteButton
