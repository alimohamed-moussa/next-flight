import * as React from 'react';

interface CloseProps {
  color: string;
  size: number;
}

const Close = ({ color, size }: CloseProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.2469 2.75314C11.4177 2.924 11.4177 3.201 11.2469 3.37186L3.37186 11.2469C3.201 11.4177 2.924 11.4177 2.75314 11.2469C2.58229 11.076 2.58229 10.799 2.75314 10.6281L10.6281 2.75314C10.799 2.58229 11.076 2.58229 11.2469 2.75314Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.75314 2.75314C2.924 2.58229 3.201 2.58229 3.37186 2.75314L11.2469 10.6281C11.4177 10.799 11.4177 11.076 11.2469 11.2469C11.076 11.4177 10.799 11.4177 10.6281 11.2469L2.75314 3.37186C2.58229 3.201 2.58229 2.924 2.75314 2.75314Z'
        fill={color}
      />
    </svg>
  );
};
export default Close;
