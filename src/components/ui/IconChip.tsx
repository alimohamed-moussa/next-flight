import * as React from 'react';
import Chip from '@mui/material/Chip';
import Icon from '../ui/Icon';
import { fontWeight, lineHeight, fontSize } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

interface IconChipProps {
  onDelete: () => void;
  label: string;
}

const IconChip = ({ label, onDelete }: IconChipProps): JSX.Element => {
  return (
    <Chip
      label={label}
      onDelete={onDelete}
      deleteIcon={
        <Icon name='close' size={15} color={palette.neutral.medium} />
      }
      variant='outlined'
      size='small'
      sx={{
        textTransform: 'capitalize',
        fontSize: fontSize.md,
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.default,
        color: palette.neutral.medium,
        paddingRight: '3px',
        border: '1px solid',
        borderColor: palette.neutral.mediumLight,
      }}
    />
  );
};
export default IconChip;
