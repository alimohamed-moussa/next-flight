import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { borderRadius } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

interface SearchInputProps {
  onSubmit: () => void;
}

const SearchInput = ({ onSubmit }: SearchInputProps): JSX.Element => {
  return (
    <Paper
      component='form'
      elevation={0}
      sx={{
        p: '2px 8px 2px 25px',
        display: 'flex',
        alignItems: 'center',
        width: {
          // sm: 335,
          // md: 740,
          lg: 500,
          xl: 640,
        },
        height: 40,
        borderRadius: borderRadius.xLarge,
        border: '1.3px solid rgba(196, 202, 205, 0.4)',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search ...'
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        type='button'
        sx={{ p: '10px', '&:hover': { background: 'none' } }}
        aria-label='search'
        onClick={onSubmit}
      >
        <SearchIcon sx={{ color: palette.rare.light }} />
      </IconButton>
    </Paper>
  );
};
export default SearchInput;
