import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { fontWeight, lineHeight, fontSize } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 6;

interface SortProps {
  title: string;
  data: string[];
  onChange: () => void;
  sortSelectedValue: string;
}

const Sort = ({
  title,
  data,
  onChange,
  sortSelectedValue,
}: SortProps): JSX.Element => {
  return (
    <>
      <FormControl
        size='small'
        sx={{
          m: 1,
          mt: 3,
        }}
      >
        <Select
          sx={{
            height: 34,
            paddingRight: '30px',
            backgroundColor: 'transparent',
            '.MuiOutlinedInput-notchedOutline': {
              border: 0,
              borderColor: 'transparent !important',
            },
            color: palette.neutral.medium,
            fontWeight: fontWeight.normal,
            '.MuiOutlinedInput-input': {
              paddingLeft: '38px !important',
            },
          }}
          displayEmpty
          value={sortSelectedValue}
          onChange={onChange}
          IconComponent={ExpandMoreSharpIcon}
          input={<OutlinedInput />}
          renderValue={() => {
            return title;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: {
                  xs: 208,
                  md: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                },
                '& .MuiMenuItem-root': {
                  paddingTop: '10px',
                  paddingBottom: '10px',
                },
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: palette.white.main,
                },
                '& .MuiMenuItem-root.Mui-selected:hover': {
                  backgroundColor: palette.neutral.light,
                },
              },
            },
          }}
        >
          {data.map((item) => (
            <MenuItem
              key={item}
              value={item}
              divider
              sx={{
                fontSize: fontSize.base,
                fontWeight: fontWeight.light,
                lineHeight: lineHeight.normal,
                color: palette.neutral.medium,
                paddingTop: '8px',
                paddingBottom: '8px',
              }}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default Sort;
