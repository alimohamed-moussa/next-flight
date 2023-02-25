import React, { useState } from 'react';
import { palette } from '../../lib/theme/palette';
import {
  borderRadius,
  lineHeight,
  fontWeight,
  fontSize,
} from '../../lib/theme/globals';
import { MultipleSelectProps } from '../../lib/type';
interface MobileSelectProps {
  data: MultipleSelectProps['data'];
  value: MultipleSelectProps['value'],
  onChange: MultipleSelectProps['onChange'],
}

const MobileSelect = ({ data, value, onChange }: MobileSelectProps): JSX.Element => {
  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    var options = event.target.options;
    const returnValues: MultipleSelectProps['value'] = []
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        const temp = data.find(d => d.id.toString() === options[i].value);
        if (temp) {
          returnValues.push(temp);
        }
      }
    }
    onChange(returnValues)
  };

  return (
    <select
      value={value.map(val => val.id.toString())}
      onChange={handleOnChange}
      multiple
      style={{
        width: '267px',
        border: '0.4px solid',
        borderColor: palette.neutral.medium,
        borderRadius: borderRadius.small,
        margin: '0 auto',
      }}
    >
      {data.map(({ id, name }) => (
        <option
          key={id}
          value={id}
          style={{
            color: palette.neutral.medium,
            fontWeight: fontWeight.light,
            fontSize: fontSize.base,
            lineHeight: lineHeight.medium,
            padding: '10px',
            borderBottom: '0.2px solid',
            borderBottomColor: palette.white.light,
            cursor: 'pointer',
          }}
        >
          {name}
        </option>
      ))}
    </select>
  );
};
export default MobileSelect;
