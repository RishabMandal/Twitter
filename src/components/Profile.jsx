import React, { useEffect, useRef, useState } from "react";

export default function Profile({ username, setusername, useremail }) {
  const textareainput = useRef(null);
  const [localprofilepic, setlocalprofilepic] = useState();

  useEffect(() => {
    if (localprofilepic) {
      localStorage.setItem("profile pic", localprofilepic);
    }
  }, [localprofilepic]);

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

          <div className="font-bold">{username}</div>
        </div>
        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 0.5,
            borderColor: "#292a2d",
          }}
        />
        <div className="mx-3 my-2 font-bold">General</div>
        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 0.5,
            borderColor: "#292a2d",
          }}
        />
        <div className="px-3 py-2 hover:bg-[#25292c]">
          <div className="text-sm">Your account</div>
        </div>
        <div className="px-3 py-2 flex text-xs">
          <div className="my-auto">Change username</div>
          <input
            ref={textareainput}
            placeholder="username"
            className="bg-black mx-4 p-1 rounded-md border-2 border-stone-600"
            type="text"
          />
          <button
            onClick={() => {
                localStorage.setItem("username", textareainput.current.value);
                setusername(textareainput.current.value);
            }}
            className="bg-blue-500 hover:bg-blue-600 rounded-full py-1 px-3"
          >
            Save
          </button>
        </div>
        <div className="px-3 py-2 flex text-xs">
          <div className="my-auto">Change profile photo</div>
          <input
            onChange={(events) => {
              setlocalprofilepic(URL.createObjectURL(events.target.files[0]));
            }}
            className="bg-black mx-4 p-1 rounded-md border-2 border-stone-600"
            type="file"
          />
          <button className="bg-blue-500 hover:bg-blue-600 rounded-full py-1 px-3">
            Save
          </button>
        </div>
        {localprofilepic && <img src={localprofilepic} alt="" />}
      </div>
    </div>
  );
}
