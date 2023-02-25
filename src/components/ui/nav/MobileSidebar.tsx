import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '../Icon';
import Logo from '../Logo';
import { Typography } from '@mui/material';
import { fontSize, fontWeight, lineHeight } from '../../../lib/theme/globals';
import { palette } from '../../../lib/theme/palette';
import { MenuItem } from '../../../lib/type';

type Anchor = 'left';

interface MobileSidebarProps {
  TopListItems: MenuItem[];
  BottomListItems: MenuItem[];
  onClose: () => void;
  open: boolean;
}

const MobileSidebar = ({
  TopListItems,
  BottomListItems,
  open,
  onClose,
}: MobileSidebarProps): JSX.Element => {
  const list = (anchor: Anchor): JSX.Element => (
    <Box
      sx={{
        width: {
          xs: 200,
          sm: 260,
        },
        paddingLeft: {
          xs: 0,
          sm: '5px',
        },
      }}
      role='presentationTw'
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List sx={{ marginTop: '15px' }}>
        {TopListItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                marginBottom: {
                  xs: 0,
                  sm: '10px',
                },
              }}
            >
              <ListItemButton href={item.link ?? '#'} onClick={item.onClick}>
                <ListItemIcon
                  sx={{
                    '&.MuiListItemIcon-root': {
                      minWidth: '28px',
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    fontWeight: fontWeight.medium,
                    fontSize: fontSize.lg,
                    lineHeight: lineHeight.default,
                    color: palette.black.main,
                    textTransform: 'capitalize',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider
        sx={{ width: '52px', marginTop: '20px', marginBottom: '20px' }}
        light
      />
      <List sx={{ marginTop: '15px' }}>
        {BottomListItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                marginBottom: {
                  xs: 0,
                  sm: '10px',
                },
              }}
            >
              <ListItemButton href={item.link ?? ''} onClick={item.onClick}>
                <ListItemIcon
                  sx={{
                    '&.MuiListItemIcon-root': {
                      minWidth: '28px',
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    fontWeight: fontWeight.medium,
                    fontSize: fontSize.lg,
                    lineHeight: lineHeight.default,
                    color: palette.black.main,
                    textTransform: 'capitalize',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: {
          md: 'none',
        },
        zIndex: 5555555555,
      }}
    >
      <Drawer
        anchor='left'
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: false,
        }}
        PaperProps={{
          sx: {
            padding: '20px',
            height: '100vh',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box component='span' sx={{ paddingTop: '5px' }}>
            <Logo color={palette.black.main} width={55} height={20} />
          </Box>
          <Typography>Threat Watch</Typography>
          <Box component='span' onClick={onClose} sx={{ cursor: 'pointer' }}>
            <Icon color={palette.black.main} size={22} name='close' />
          </Box>
        </Box>
        {list('left')}
      </Drawer>
    </Box>
  );
};

export default MobileSidebar;
