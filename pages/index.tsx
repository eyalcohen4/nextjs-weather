import Head from 'next/head'
import MediaQuery from 'react-responsive'
import { getCities } from '../data/api'
import styles from '../styles/Home.module.css'
import CityCard from '../components/CityCard'

export default function Home({ cities }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MediaQuery minWidth={786}>
        <h1>Weather Channel - Desktop</h1>
      </MediaQuery>
      <MediaQuery maxWidth={786}>
        <h1>Weather Channel - Mobile</h1>
      </MediaQuery>
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
  const cities = getCities()

  return {
    props: { cities },
  }
}
