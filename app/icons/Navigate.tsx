import React, { FC } from 'react';
import classnames from 'classnames';

interface INavigate {
  className?: string;
}

const Navigate: FC<INavigate> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={classnames(['-rotate-[35deg]', className])}
    >
      <path
        d="M4 18.5v-13L19.423 12zM5 17l11.85-5L5 7v3.885L9.846 12L5 13.116zm0 0V7z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Navigate;
