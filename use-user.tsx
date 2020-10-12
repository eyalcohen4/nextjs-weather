import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext<UserContextState>({
  name: '',
  status: '',
  favoritesIds: [],
  markAsFavorite: () => {},
})

type Status = 'loading' | 'logged-in' | 'no-user'
const FAVORITES_STORAGE_KEY = 'FAVORITES'

export const UserProvider = ({ children }) => {
  const [name, setName] = useState<UserContextState['name']>()
  const [favoritesIds, setFavoriteIds] = useState<
    UserContextState['favoritesIds']
  >(null)
  const [status, setStatus] = useState<Status>('loading')


  useEffect(() => {
    // can be request to server instead
    loadFavorites()
  }, [])

  const markAsFavorite = (id: number) => {
    const index = favoritesIds.findIndex((favorite) => favorite === id)

    if (index > -1) {
      const clone = [...favoritesIds]
      clone.splice(index, 1)
      
      setFavoriteIds(clone)
      saveFavorites(clone)
    } else {
      setFavoriteIds([...favoritesIds, id])
      saveFavorites([...favoritesIds, id])
    }
  }

  

  const loadFavorites = () => {
    // can be replaced with server,
    // mimic an xhr with setTimeout...
    setTimeout(() => {
      const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY)
      const parsed = JSON.parse(favorites)
      if (parsed) {
        setFavoriteIds(parsed)
      }

      setStatus('logged-in')
    }, 1000)
  }

  const saveFavorites = (favorites: number[]) => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
  }

  return (
    <UserContext.Provider value={{ name, favoritesIds, status, markAsFavorite }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
    return useContext(UserContext)
}
