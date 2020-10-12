import Link from 'next/link'
import React, { useState, useEffect } from 'react'

import CityWeather from '../../components/CityWeather'

import { getCityWeather } from '../../services/weather'
import { getCityBySlug, getCities } from '../../data/api'
import { useUser } from '../../use-user'
import CityFavoriteButton from '../../components/CityFavoriteButton'

function City({ city }: { city: City }) {
  const [weather, setWeather] = useState<Weather | null>(null)
  const { favoritesIds, markAsFavorite } = useUser()

  useEffect(() => {
    getWeather()
  }, [])

  const getWeather = async () => {
    // can be a hook with Context
    const weather = await getCityWeather(city.name)
    setWeather(weather)
  }

  const isFavorite = favoritesIds?.includes(city.id)
  console.log(favoritesIds)

  return (
    <div className="city">
      <header className="city-header">
        <p className="city-title">
          {city.name}, {city.country}
        </p>
        <p className="city-coords">
          {city.coordinates.long}, {city.coordinates.lat}
        </p>
      </header>
      <main className="city-main">
        {weather ? (
          <CityWeather weather={weather} />
        ) : (
          <p>Loading current {city.name} Weather...</p>
        )}
      </main>
      <footer>
        <div style={{ marginBottom: 8 }}>
          <CityFavoriteButton city={city} />
        </div>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </footer>
    </div>
  )
}

export async function getStaticPaths() {
  // this can be replaced with request to a server
  const cities = getCities()
  const paths = cities.map((city) => ({ params: { slug: city.slug } }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const city = getCityBySlug(params.slug)

  return {
    props: { city },
  }
}

export default City
