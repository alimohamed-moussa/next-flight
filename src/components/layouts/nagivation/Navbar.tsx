import React, { useState } from 'react';

import { palette } from '../../../lib/theme/palette';

import { useSession, signOut } from 'next-auth/react';
import Icon from '../../ui/Icon';
import { useRouter } from 'next/router';
import TopBar from '../../ui/nav/TopBar';
import LateralBar from '../../ui/nav/LateralBar';

const Navbar = (): JSX.Element => {
  const { pathname } = useRouter();
  const TopListItems = [
    {
      icon: (
        <Icon name='bookmark' color={pathname === '/requests' ? palette.orange.main : palette.black.main} size={20} />
      ),
      title: 'All requests',
      link: '/requests'
    },
    {
      icon: (
        <Icon name='support' color={pathname === '/support' ? palette.orange.main : palette.black.main} size={20} />
      ),
      title: 'Aide',
      link: '/support'
    },
    {
      icon: <Icon name='logout' color={palette.black.main} size={20} />,
      title: 'log Out',
      onClick: () => {
        void signOut({
          callbackUrl: '/api/auth/logout'
        });
      }
    }
  ];
  const BottomListItems = [
    {
      icon: <Icon name='support' color={palette.black.main} size={20} />,
      title: 'help',
      link: ''
    },
    {
      icon: <Icon name='logout' color={palette.black.main} size={20} />,
      title: 'log Out',
      onClick: () => {
        void signOut({
          callbackUrl: '/api/auth/logout'
        });
      }
    }
  ];

  const { data: session } = useSession();

  return (
    <>
      <TopBar
        userDataColor={palette.white.main}
        topbarColor={palette.primary.main}
        menuIconSize={27}
        menuIconColor={palette.white.main}
        menuIconName='hamburger'
        logoWidth={64}
        logoHeight={24}
        logoColor={palette.white.main}
        userIconSize={27}
        userIconColor={palette.white.main}
        userIconName='user'
        username={session?.user?.name ?? ''}
        userEmail={session?.user?.email ?? ''}
        TopListItems={TopListItems}
        BottomListItems={BottomListItems}
      />
      <LateralBar
        TopListItems={TopListItems}
        bgColor={palette.white.main}
        logoTextColor={palette.black.light}
        logoColor={palette.black.main}
        logoHeight={24}
        logoWidth={60}
      />
    </>
  );
};
export default Navbar;
