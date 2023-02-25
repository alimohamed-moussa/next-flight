import * as React from 'react';

interface BookmarkProps {
  color: string;
  size: number;
}

const Bookmark = ({ color, size }: BookmarkProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 22'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1.6012 1.00232C1.98614 0.697573 2.50824 0.526367 3.05263 0.526367H17.4211C17.9654 0.526367 18.4875 0.697572 18.8725 1.00232C19.2574 1.30707 19.4737 1.72039 19.4737 2.15137V20.0264C19.4737 20.3217 19.2712 20.5938 18.9449 20.737C18.6186 20.8802 18.2198 20.8719 17.9034 20.7154L10.2368 14.1852L2.57026 20.7154C2.25388 20.8719 1.85511 20.8802 1.52879 20.737C1.20247 20.5938 1 20.3217 1 20.0264V2.15137C1 1.72039 1.21626 1.30707 1.6012 1.00232Z' />
    </svg>
  );
};
export default Bookmark;
