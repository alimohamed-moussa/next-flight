import * as React from 'react';

interface FlatBookmarkProps {
  color: string;
  size: number;
}

const FlatBookmark = ({ color, size }: FlatBookmarkProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.11757 1.25775C2.33041 1.09271 2.61908 1 2.92008 1H10.8645C11.1655 1 11.4542 1.09271 11.667 1.25775C11.8799 1.42278 11.9994 1.64661 11.9994 1.88V11.56C11.9994 11.72 11.8875 11.8673 11.7071 11.9448C11.5266 12.0224 11.3062 12.0179 11.1312 11.9331L6.8923 8.39676L2.65337 11.9331C2.47844 12.0179 2.25796 12.0224 2.07753 11.9448C1.8971 11.8673 1.78516 11.72 1.78516 11.56V1.88C1.78516 1.64661 1.90473 1.42278 2.11757 1.25775Z'
        stroke={color}
        strokeWidth='0.9'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
export default FlatBookmark;
