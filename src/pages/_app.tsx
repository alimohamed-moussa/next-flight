import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
//import { ApolloProvider } from '../lib/graphql/client';
import { ThemeProvider } from '../lib/theme';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App ({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider>
      {getLayout(
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
      )}
    </SessionProvider>
  );
}
