import { HttpLink } from '@apollo/client';
import { createAuthLink } from '@/lib/apollo-auth-link';

export function getGraphQLUri(): string {
  const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL;

  if (graphqlUrl) {
    return normalizeGraphQLUri(graphqlUrl);
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  return normalizeGraphQLUri(apiUrl);
}

function normalizeGraphQLUri(url: string): string {
  const trimmedUrl = url.trim();

  try {
    const parsedUrl = new URL(trimmedUrl);

    if (!parsedUrl.pathname || parsedUrl.pathname === '/') {
      parsedUrl.pathname = '/graphql';
    }

    return parsedUrl.toString();
  } catch {
    const normalizedUrl = trimmedUrl.replace(/\/$/, '');
    if (normalizedUrl.endsWith('/graphql')) {
      return normalizedUrl;
    }

    return `${normalizedUrl}/graphql`;
  }
}

export function createApolloLink() {
  const httpLink = new HttpLink({
    uri: getGraphQLUri(),
    fetchOptions: { cache: 'no-store' },
  });

  const { authLink, errorLink } = createAuthLink();

  return errorLink.concat(authLink.concat(httpLink));
}
