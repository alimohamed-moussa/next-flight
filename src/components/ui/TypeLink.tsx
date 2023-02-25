import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React from 'react';
import { fontSize, fontWeight, lineHeight } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

export interface TypeLinkProps {
  title: string;
  url: string;
}

const TypeLink = ({ title, url }: TypeLinkProps): JSX.Element => {
  return (
    <Box
      sx={{
        // width: '100%',
        marginRight: {
          lg: '20px',
          xl: '20px',
        },
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontSize: {
          xs: fontSize.lg,
          md: fontSize.xl,
        },
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.large,
      }}
    >
      <Link href={url} underline='none' color={palette.neutral.main}>
        {title}
      </Link>
    </Box>
  );
};

export default TypeLink;
