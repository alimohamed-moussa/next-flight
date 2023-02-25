import * as React from 'react';

interface HamburgerProps {
  color: string;
  size: number;
}

const Hamburger = ({ color, size }: HamburgerProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 27 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.375 13.5C3.375 13.034 3.75276 12.6562 4.21875 12.6562H22.7812C23.2472 12.6562 23.625 13.034 23.625 13.5C23.625 13.966 23.2472 14.3438 22.7812 14.3438H4.21875C3.75276 14.3438 3.375 13.966 3.375 13.5Z'
        fill={color}
      />
      <path
        d='M3.375 6.75C3.375 6.28401 3.75276 5.90625 4.21875 5.90625H22.7812C23.2472 5.90625 23.625 6.28401 23.625 6.75C23.625 7.21599 23.2472 7.59375 22.7812 7.59375H4.21875C3.75276 7.59375 3.375 7.21599 3.375 6.75Z'
        fill={color}
      />
      <path
        d='M3.375 20.25C3.375 19.784 3.75276 19.4062 4.21875 19.4062H22.7812C23.2472 19.4062 23.625 19.784 23.625 20.25C23.625 20.716 23.2472 21.0938 22.7812 21.0938H4.21875C3.75276 21.0938 3.375 20.716 3.375 20.25Z'
        fill={color}
      />
    </svg>
  );
};
export default Hamburger;
