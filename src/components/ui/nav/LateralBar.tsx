import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { fontSize, fontWeight, lineHeight } from '../../../lib/theme/globals';
import { palette } from '../../../lib/theme/palette';

import { MenuItem } from '../../../lib/type';

import { useRouter } from 'next/router';

interface LateralBarProps {
  TopListItems: MenuItem[];
  bgColor: string;
  logoTextColor: string;
  logoColor: string;
  logoHeight: number;
  logoWidth: number;
}

const LateralBar = ({
  TopListItems,
  bgColor,
  logoTextColor,
  logoColor,
  logoHeight,
  logoWidth
}: LateralBarProps): JSX.Element => {
  const { push } = useRouter();

  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          lg: 'flex'
        },
        position: 'fixed',
        top: '0',
        left: '0',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: bgColor,
        width: '300px',
        height: '100vh',
        paddingTop: '40px',

        border: '1px solid rgba(192, 197, 203, 0.37)'
      }}
    >
      <List
        sx={{
          marginTop: '50px',
          width: '200px',
          marginLeft: '-30px'
        }}
      >
        {TopListItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                marginBottom: '16px'
              }}
            >
              <ListItemButton
                sx={{
                  '&:hover': {
                    background: 'none'
                  }
                }}
                onClick={() => {
                  if (item.onClick != null) item.onClick();
                  if (item.link != null) void push(item.link);
                }}
              >
                <ListItemIcon
                  sx={{
                    '&.MuiListItemIcon-root': {
                      minWidth: '28px'
                    }
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
                    textTransform: 'capitalize'
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default LateralBar;
