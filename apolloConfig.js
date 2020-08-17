import 'cross-fetch/polyfill';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://landing-test-gql-endpoint.miimosa.net/graphql',
    credentials: 'same-origin',
    fetch,
  }),
  cache: new InMemoryCache()
});