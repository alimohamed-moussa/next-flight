import * as React from 'react';

interface SearchProps {
  color: string;
  size: number;
}

const Search = ({ color, size }: SearchProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 25 25'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.8359 20.6707C13.0182 20.6703 15.1376 19.9398 16.8567 18.5955L22.2615 24L24 22.2616L18.5952 16.8571C19.9402 15.1379 20.6713 13.0181 20.6718 10.8354C20.6718 5.41239 16.2592 1 10.8359 1C5.41263 1 1 5.41239 1 10.8354C1 16.2583 5.41263 20.6707 10.8359 20.6707ZM10.8359 3.45884C14.9043 3.45884 18.2128 6.76721 18.2128 10.8354C18.2128 14.9035 14.9043 18.2119 10.8359 18.2119C6.76752 18.2119 3.45897 14.9035 3.45897 10.8354C3.45897 6.76721 6.76752 3.45884 10.8359 3.45884Z' />
    </svg>
  );
};
export default Search;
