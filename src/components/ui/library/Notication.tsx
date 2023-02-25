import * as React from 'react';

interface NotificationProps {
  color: string;
  size: number;
}

const Notification = ({ color, size }: NotificationProps): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 29 29'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M14.4997 6.27197C13.5506 6.27197 12.6108 6.45247 11.734 6.80315C10.8571 7.15383 10.0604 7.66784 9.38923 8.31582C8.71811 8.9638 8.18575 9.73306 7.82254 10.5797C7.45933 11.4263 7.27239 12.3337 7.27239 13.2501C7.27239 17.2888 6.39534 19.7211 5.55371 21.1251H23.4458C22.6041 19.7211 21.7271 17.2888 21.7271 13.2501C21.7271 12.3337 21.5401 11.4263 21.1769 10.5797C20.8137 9.73306 20.2814 8.9638 19.6102 8.31582C18.9391 7.66784 18.1424 7.15383 17.2655 6.80315C16.3887 6.45247 15.4488 6.27197 14.4997 6.27197ZM11.0403 5.18636C12.1371 4.74773 13.3126 4.52197 14.4997 4.52197C15.6869 4.52197 16.8624 4.74773 17.9591 5.18636C19.0559 5.62499 20.0524 6.2679 20.8919 7.07838C21.7313 7.88886 22.3972 8.85104 22.8515 9.90999C23.3058 10.9689 23.5396 12.1039 23.5396 13.2501C23.5396 17.0418 24.3614 19.1593 25.0149 20.2492C25.1737 20.5148 25.258 20.8169 25.2583 21.1236C25.2585 21.4302 25.1754 21.7316 25.017 21.9974C24.8587 22.2633 24.6308 22.4843 24.3562 22.6383C24.0815 22.7924 23.7698 22.874 23.4521 22.8751L23.449 22.8751H5.55052L5.54733 22.8751C5.22971 22.874 4.91796 22.7924 4.64331 22.6383C4.36867 22.4843 4.14077 22.2633 3.98244 21.9974C3.82412 21.7316 3.74093 21.4302 3.74121 21.1236C3.74149 20.8169 3.82523 20.5157 3.98405 20.2501C4.63756 19.1602 5.45989 17.0418 5.45989 13.2501C5.45989 12.1039 5.69372 10.9689 6.14801 9.90999C6.60231 8.85104 7.26818 7.88886 8.1076 7.07838C8.94703 6.2679 9.94357 5.62499 11.0403 5.18636Z' />
      <path d='M10.875 21.125C11.3755 21.125 11.7812 21.5168 11.7812 22V22.875C11.7812 23.5712 12.0677 24.2389 12.5776 24.7312C13.0874 25.2234 13.7789 25.5 14.5 25.5C15.2211 25.5 15.9126 25.2234 16.4224 24.7312C16.9323 24.2389 17.2188 23.5712 17.2188 22.875V22C17.2188 21.5168 17.6245 21.125 18.125 21.125C18.6255 21.125 19.0312 21.5168 19.0312 22V22.875C19.0312 24.0353 18.5539 25.1481 17.7041 25.9686C16.8543 26.7891 15.7018 27.25 14.5 27.25C13.2982 27.25 12.1457 26.7891 11.2959 25.9686C10.4461 25.1481 9.96875 24.0353 9.96875 22.875V22C9.96875 21.5168 10.3745 21.125 10.875 21.125Z' />
      <ellipse cx='22.7855' cy='5.66667' rx='4.83333' ry='4.66667' />
    </svg>
  );
};
export default Notification;
