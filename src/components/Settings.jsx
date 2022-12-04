import React from "react";

export default function Settings() {
  return (
    <>
      <div className="w-full max-w-[600px] bg-[#292a2d]">
        <div className="mx-[0.05rem] pt-1 h-full bg-black text-white">
          <div className="my-1">
            <div className="mx-3 font-bold">Settings</div>
            <div className="mx-3 font-bold mt-4 mb-2">Privacy</div>
            <div className="px-3 py-2 hover:bg-[#25292c]">
              <div className="text-sm">Personalization and data</div>
              <div className="text-xs text-stone-600">Allow all</div>
            </div>
            <div className="px-3 py-2 hover:bg-[#25292c]">
              <div className="text-sm">Your Twitter data</div>
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
          </div>
        </div>
      </div>
    </>
  );
}
