'use client';

import { ApolloNextAppProvider } from '@apollo/client-integration-nextjs';
import type { ReactNode } from 'react';
import { makeClient } from '@/api/client';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}