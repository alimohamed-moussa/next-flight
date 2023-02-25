import * as React from 'react';

interface LogoutProps {
  color: string;
  size: number;
}

const Logout = ({ color, size }: LogoutProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 21'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M17.3583 4.78416L15.7266 6.41585L18.7123 9.41305H6.94333V11.7275H18.7123L15.7266 14.7131L17.3583 16.3564L23.1444 10.5703L17.3583 4.78416ZM2.31444 2.46972H11.5722V0.155273H2.31444C1.0415 0.155273 0 1.19677 0 2.46972V18.6708C0 19.9438 1.0415 20.9853 2.31444 20.9853H11.5722V18.6708H2.31444V2.46972Z' />
    </svg>
  );
};
export default Logout;
