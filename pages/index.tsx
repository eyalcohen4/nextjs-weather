import Head from 'next/head'
import { getCities } from '../data/api'
import styles from '../styles/Home.module.css'
import CityCard from '../components/CityCard'
import { useUser } from '../use-user'

export default function Home({ cities }) {
  const { status } = useUser()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Weather Channel</h1>
        <div className="cities">
          {cities?.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
    </div>
  )
}

// a sample of getting dynamic data server side
export const getServerSideProps = () => {
  // can be XHR
  const cities = getCities()

  return {
    props: { cities },
  }
}
