import React from "react";

const CopyIcon = ({className}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.667 10.6665H13.3337C11.8609 10.6665 10.667 11.8604 10.667 13.3332V26.6665C10.667 28.1393 11.8609 29.3332 13.3337 29.3332H26.667C28.1398 29.3332 29.3337 28.1393 29.3337 26.6665V13.3332C29.3337 11.8604 28.1398 10.6665 26.667 10.6665Z"
        stroke="white"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.33366 21.3332C3.86699 21.3332 2.66699 20.1332 2.66699 18.6665V5.33317C2.66699 3.8665 3.86699 2.6665 5.33366 2.6665H18.667C20.1337 2.6665 21.3337 3.8665 21.3337 5.33317"
        stroke="white"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CopyIcon;
