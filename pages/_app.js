import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* This renders the pages */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
