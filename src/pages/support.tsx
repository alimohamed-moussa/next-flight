import React from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Support: NextPageWithLayout = (): JSX.Element => {
  return <div>support</div>;
};

export default Support;

Support.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
