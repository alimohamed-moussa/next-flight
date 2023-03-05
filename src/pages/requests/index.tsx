import React from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Requests: NextPageWithLayout = () => {
  return <div>Requests</div>;
};

export default Requests;

Requests.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
