import React, { useState, useEffect } from 'react';
import { Box, Fab } from '@mui/material';
import { palette } from '../../lib/theme/palette';
import ArrowUp from '../../assets/svg/arrow-up.svg';

interface ScrollToTopProps {
  showBelow: number;
}

const ScrollToTop = ({ showBelow }: ScrollToTopProps): JSX.Element => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > showBelow) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  });

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {showTopBtn && (
        <Box
          role='presentation'
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1,
          }}
        >
          <Fab
            onClick={scrollToTop}
            sx={{
              border: '2px solid',
              backgroundColor: palette.white.main,
              '&:hover': {
                backgroundColor: palette.white.main,
              },
              borderColor: palette.neutral.mediumLight,
              boxShadow: 'none',
            }}
            color='primary'
            size='medium'
            aria-label='scroll back to top'
          >
            <ArrowUp style={{ stroke: palette.neutral.mediumLight, width: '15px', height: '15px' }} />
          </Fab>
        </Box>
      )}
    </>
  );
};

export default ScrollToTop;
