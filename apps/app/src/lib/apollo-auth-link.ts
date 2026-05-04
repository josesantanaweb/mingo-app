import { ErrorLink } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client';

export const createAuthLink = () => {
  const authLink = new ApolloLink((operation, forward) => {
    return forward(operation);
  });

  const errorLink = new ErrorLink(() => undefined);

  return { authLink, errorLink };
};