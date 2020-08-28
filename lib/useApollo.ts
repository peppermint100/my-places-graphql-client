import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
// import { concatPagination } from '@apollo/client/utilities'
import env from '../config/env'
import cookie from "cookie"
import { parse } from 'path'

let apolloClient

// function parseCookies(req?: any, options = {}) {
//     return cookie.parse(
//         req ? req.headers.cookie || "" : document.cookie,
//         options
//     );
// }


function createApolloClient(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: `${env.GRAPHQL_ENDPOINT}`, // Server URL (must be absolute),
            credentials: 'include', // Additional fetch() options like `credentials` or `headers`include
            // must be include to get cookies from server
            headers: {
                'Access-Control-Allow-Credentials': true
            },
        }),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                }
            },
        }),
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()
        // Restore the cache using the data passed from getStaticProps/getServerSideProps
        // combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState })
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState): ApolloClient<NormalizedCacheObject>{
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}