/* eslint-disable @typescript-eslint/indent */

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import Icon from './Icon';
import { palette } from '../../lib/theme/palette';
import { fontSize, fontWeight, lineHeight } from '../../lib/theme/globals';
import Box from '@mui/system/Box';

interface MobileFiltersContainerProps {
  onReset: () => void;
  onApply: () => void;
  open: boolean;
  fullScreen: unknown;
  onClose: () => void;
  onOpen: () => void;
  children: JSX.Element;
}

const MobileFiltersContainer = ({
  onReset,
  onApply,
  open,
  onClose,
  onOpen,
  fullScreen,
  children,
}: MobileFiltersContainerProps): JSX.Element => {
  // const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md' as never));

  // const onOpen = (): void => {
  //   setOpen(true);
  // };

  // const onClose = (): void => {
  //   setOpen(false);
  // };

  return (
    <Box
      sx={{
        display: {
          md: 'none !important',
        },
      }}
    >
      {/* <Button variant='outlined' onClick={onOpen}>
        mobile modal test
      </Button> */}
      <Dialog
        scroll='body'
        sx={{
          top: 80,
          paddingBottom: 10,
        }}
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby='filters-container'
      >
        <DialogTitle
          id='filters-container'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '5px',
            paddingRight: {
              xs: '4px !important',
              sm: '0px !important',
            },
          }}
        >
          <Typography
            component='span'
            sx={{
              color: palette.somber.dark,
              fontSize: fontSize.lg,
              lineHeight: lineHeight.large,
              fontweight: fontWeight.medium,
            }}
          >
            Filter par
          </Typography>
          <Button
            endIcon={
              <Icon color={palette.orange.main} name='close' size={16} />
            }
            variant='outlined'
            color='orange'
            onClick={onReset}
          >
            réinitialiser
          </Button>
          <IconButton onClick={onClose}>
            <Icon name='close' color={palette.black.main} size={16} />
          </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <Box
          sx={{
            zIndex: 1500000,
            backgroundColor: palette.white.main,
            width: '100%',
            position: 'fixed',
            bottom: 0,
            height: 90,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Button
            size='medium'
            variant='contained'
            color='orange'
            sx={{
              fontSize: fontSize.base,
              lineHeight: lineHeight.medium,
            }}
            onClick={onApply}
          >
            Appliquer
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};

export default MobileFiltersContainer;
