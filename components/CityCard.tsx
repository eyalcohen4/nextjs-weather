import Link from 'next/link'
import CityFavoriteButton from './CityFavoriteButton'

function CityCard({ city }: { city: City }) {
  return (
    <div className="city-card">
      <div className="city-card-header">
        <Link href={`/city/${city.slug}`}>
          <p>{city.name}</p>
        </Link>
      </div>
      <Link href={`/city/${city.slug}`}>
        <a>See {city.name} Weather</a>
      </Link>
      <CityFavoriteButton city={city} />
    </div>
  )
}


export default CityCard