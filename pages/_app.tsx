
// apply css file here to make it global,
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/useApollo'


function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default App