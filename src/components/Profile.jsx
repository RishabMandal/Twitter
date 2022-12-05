import React from "react";

export default function Profile() {
  return (
    <div className="w-full max-w-[600px] bg-[#292a2d]">
      <div className="mx-[0.05rem] pt-1 h-full bg-black text-white">
        <div className="flex my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-2 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <div>Username</div>
        </div>
      </div>
    </div>
  );
}
