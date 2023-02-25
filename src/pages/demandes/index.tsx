import React from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const Demandes: NextPageWithLayout = () => {
  return <div>demandes</div>;
};

export default Demandes;

Demandes.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
