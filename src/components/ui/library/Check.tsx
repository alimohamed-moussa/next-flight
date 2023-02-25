import * as React from 'react';

interface CheckProps {
  color: string;
  size: number;
}

const Check = ({ color, size }: CheckProps): JSX.Element => {
  return (
    <svg
      viewBox='0 0 10 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.39017 0.109835C9.53661 0.256282 9.53661 0.493718 9.39017 0.640165L4.14016 5.89016C3.99372 6.03661 3.75628 6.03661 3.60984 5.89016L0.984835 3.26516C0.838388 3.11872 0.838388 2.88128 0.984835 2.73484C1.13128 2.58839 1.36872 2.58839 1.51517 2.73484L3.875 5.09467L8.85983 0.109835C9.00628 -0.0366117 9.24372 -0.0366117 9.39017 0.109835Z'
        fill={color}
      />
    </svg>
  );
};
export default Check;
