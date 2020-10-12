import cities from './cities.json'

export const getCities = (): City[] => cities

export const getCityBySlug = (slug: string): City =>
  cities.find((city) => city.slug === slug)
