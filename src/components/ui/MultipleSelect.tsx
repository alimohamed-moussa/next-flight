import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import CustomCheckbox from './CustomCheckbox';
import {
  borderRadius,
  fontWeight,
  fontSize,
  shadow,
} from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';
import { MultipleSelectProps, MultipleSelectDataType } from '../../lib/type';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 4;

const MultipleSelect = ({
  title,
  data,
  value,
  onChange,
  whiteParentBgColor = false,
  checkedCheckboxColor = '',
  checkboxBorderColor = '',
  size = 16,
}: MultipleSelectProps): JSX.Element => {
  return (
    <>
      <FormControl
        size='small'
        sx={{
          minWidth: {
            xs: '270px',
            md: '188px',
          },
          marginTop: '15px',
          marginRight: '15px',
          borderRadius: borderRadius.none,
        }}
      >
        <Select
          sx={{
            borderRadius: borderRadius.small,
            height: {
              xs: '40px !important',
              md: '34px !important',
            },
            backgroundColor: palette.white.main,
            '.MuiOutlinedInput-notchedOutline': {
              ...(whiteParentBgColor !== true && {
                border: 0,
                borderColor: palette.white.main + '!important',
              }),
              ...(whiteParentBgColor === true && {
                border: '0.4px solid',
                borderColor: palette.somber.dark + '!important',
              }),
            },
            color: palette.neutral.medium,
            fontWeight: fontWeight.normal,
            '& .MuiSelect-icon': {
              color: palette.neutral.medium,
            },
            boxShadow: shadow.none,
          }}
          multiple
          name={title}
          displayEmpty
          value={value.map(({ id }) => id)}
          onChange={(
            event: SelectChangeEvent<MultipleSelectDataType['id'][]>
          ) => {
            const returnValues: MultipleSelectProps['value'] = [];
            for (let i = 0; i < event.target.value.length; i++) {
              const temp = data.find((d) => d.id === event.target.value[i]);
              if (temp) {
                returnValues.push(temp);
              }
            }
            onChange(returnValues);
          }}
          IconComponent={ExpandMoreSharpIcon}
          input={
            <OutlinedInput
              sx={{
                borderRadius: borderRadius.none,
              }}
            />
          }
          renderValue={() => {
            if (value.length === 0) {
              return title;
            }
            return `${title} (${value.length})`;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxWidth: {
                  xs: '270px',
                  md: '188px',
                },

                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                '& .MuiMenuItem-root': {
                  backgroundColor: palette.white.main + '!important',
                  borderTopLefttRadius: borderRadius.none,
                  paddingTop: '4px',
                  paddingBottom: '4px',
                  paddingLeft: '7px',
                },
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: palette.white.main + '!important',
                },
                '& .MuiMenuItem-root.Mui-selected:hover': {
                  backgroundColor: palette.neutral.light + '!important',
                },
                '& li': {
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                  hyphens: 'auto',
                }
              },
            },
          }}
        >
          {data.map(({ id, name }) => (
            <MenuItem key={id} value={id} divider>
              <CustomCheckbox
                checked={Boolean(value.find((val) => val.id === id))}
                size={size}
                checkedColor={checkedCheckboxColor}
                borderColor={checkboxBorderColor}
              />
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  fontSize: fontSize.base,
                  color: palette.neutral.medium,
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default MultipleSelect;
