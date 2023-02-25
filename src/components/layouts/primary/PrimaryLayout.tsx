import { Container } from '@mui/system';
import Head from 'next/head';
import { ReactNode } from 'react';
import Navbar from '../nagivation/Navbar';

const PrimaryLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: {
            xs: '100%',
            md: '97%',
            lg: '90%',
            // xl: '100%',
          },
          marginTop: '100px',
          marginLeft: {
            lg: '120px !important',
          },
        }}
      >
        {children}
      </Container>
    </>
  );
};
export default PrimaryLayout;
