import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import { fontSize, fontWeight } from '../../../lib/theme/globals';
import Icon from '../Icon';
import Logo from '../Logo';
import AppBar from '../Appbar';
import MobileSidebar from './MobileSidebar';
import { TopBarProps } from '../../../lib/type';

const TopBar = ({
  topbarColor,
  menuIconSize,
  menuIconColor,
  menuIconName,
  userIconSize,
  userIconColor,
  userIconName,
  logoWidth,
  logoHeight,
  logoColor,
  username,
  userEmail,
  userDataColor,
  TopListItems,
  BottomListItems
}: TopBarProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const openMobileSidebar = (): void => {
    return setOpen(true);
  };
  const closeMobileSidebar = (): void => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          backgroundColor: topbarColor
          // width: 'calc(100% - 100px)',
        }}
        position='fixed'
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: {
              lg: 'flex-end'
            }
          }}
        >
          {/* Mobile andd tablette burger icon */}
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{
              mr: 2,
              display: {
                lg: 'none'
              },
              marginRight: 'Opx'
            }}
            onClick={openMobileSidebar}
          >
            {/* burger icon */}
            <Icon name={menuIconName} size={menuIconSize} color={menuIconColor} />
          </IconButton>
          {/* Desktop logo */}
          <Box
            sx={{
              flexGrow: 1,
              paddingTop: '8px',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
          >
            <Typography
              component='a'
              sx={{
                display: {
                  xs: 'none',
                  lg: 'block'
                }
              }}
              href='/'
            >
              <Logo width={logoWidth} height={logoHeight} color={logoColor} />
            </Typography>
          </Box>
          {/* user icon */}
          <Typography
            component='span'
            sx={{
              marginRight: {
                sm: '0px',
                lg: '8px'
              }
            }}
          >
            <Icon name={userIconName} size={userIconSize} color={userIconColor} />
          </Typography>
          {/* user metatdata */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}
          >
            <Typography
              component='span'
              sx={{
                fontWeight: fontWeight.bold,
                fontSize: fontSize.base,
                color: userDataColor,
                display: {
                  xs: 'none',
                  lg: 'block'
                }
              }}
            >
              {username}
            </Typography>
            <Typography
              component='span'
              sx={{
                fontWeight: fontWeight.normal,
                fontSize: fontSize.md,
                color: userDataColor,
                display: {
                  xs: 'none',
                  lg: 'block'
                }
              }}
            >
              {userEmail}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileSidebar
        TopListItems={TopListItems}
        BottomListItems={BottomListItems}
        open={open}
        onClose={closeMobileSidebar}
      />
    </>
  );
};
export default TopBar;
