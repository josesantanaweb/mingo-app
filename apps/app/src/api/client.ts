import { ApolloClient, InMemoryCache } from '@apollo/client-integration-nextjs';
import { createApolloLink } from '@/lib/apollo/make-link';

export function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createApolloLink(),
  });
}
