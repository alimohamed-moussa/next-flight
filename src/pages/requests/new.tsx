import React from 'react';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../page';

const NewDemande: NextPageWithLayout = (): JSX.Element => {
  return <div>new</div>;
};

export default NewDemande;
NewDemande.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
