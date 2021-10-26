import { React } from "react";




export const ExpandChat = ({ size }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="15" cy="15" r="15" fill="#0067DD" />
      <path
        d="M11.5 10.75L15 7.25L18.5 10.75"
        stroke="#0067DD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5 19.25L15 22.75L11.5 19.25"
        stroke="#0067DD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};



