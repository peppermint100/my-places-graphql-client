// apply css file here to make it global,
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("_app.tsx : ", Component)
  console.log("_app.tsx : ", pageProps)
  return <Component {...pageProps} />
}

export default MyApp
