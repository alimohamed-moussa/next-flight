import * as React from 'react';

interface ArrowDownProps {
  color: string;
  size: number;
}

const ArrowDown = ({ color, size }: ArrowDownProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 10 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.984835 0.234835C1.13128 0.0883883 1.36872 0.0883883 1.51517 0.234835L5 3.71967L8.48483 0.234835C8.63128 0.0883883 8.86872 0.0883883 9.01517 0.234835C9.16161 0.381282 9.16161 0.618718 9.01517 0.765165L5.26516 4.51516C5.11872 4.66161 4.88128 4.66161 4.73484 4.51516L0.984835 0.765165C0.838388 0.618718 0.838388 0.381282 0.984835 0.234835Z'
        fill={color}
      />
    </svg>
  );
};
export default ArrowDown;
