import React from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Profile: NextPageWithLayout = () => {
  return <div>profile</div>;
};

export default Profile;
Profile.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
