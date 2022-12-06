import React, { useState, useEffect } from "react";

export default function Settings() {
  // User track
  var starttime = Date.now();
  //   var endTime = starttime + INITIAL_WAIT;
  const [totalTime, settotalTime] = useState(0);
  //   var clickCount = 0;
  //   var buttonClicks = {
  //     total: 0,
  //   };
  //   var buttonClickCount = 0;
  //   var linkClickCount = 0;
  //   var keypressCount = 0;
  //   var scrollCount = 0;
  //   var mouseMovementCount = 0;
  //   var linkClickCount = 0;

  // Button for twitter data
  const [btnState, setbtnState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      settotalTime(totalTime + 1);
    }, 1000);
  });

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
            <div
              onClick={() => {
                // btnState ? setbtnState(false) : setbtnState(true);
                if (btnState) {
                  setbtnState(false);
                } else {
                  setbtnState(true);
                }
              }}
              className="px-3 py-2 cursor-pointer hover:bg-[#25292c]"
            >
              <button className="text-sm">Your Twitter data</button>
            </div>
            <div className={`${btnState ? "" : "hidden"} px-3`}>
              {/* Tracking users data  */}
              <div className="text-sm">Language : {navigator.language}</div>
              <div className="text-sm">Platform : {navigator.platform}</div>
              <div className="text-sm">Start time : {starttime}</div>
              <div className={`text-sm`}>
                Total time on this page : {totalTime} sec
              </div>
              {/* <div className="text-sm">Localstorage : {localStorage}</div> */}
            </div>
            <div className="px-3 py-2">
              <div className="text-sm">
                These settings apply to this browser or device while you're
                logged out. They don't have any effect when you're logged in.
              </div>
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
            <div className="px-3 py-2 hover:bg-[#25292c]">
              <div className="text-sm">Additional resources</div>
            </div>
            <hr
              style={{
                color: "#292a2d",
                backgroundColor: "#292a2d",
                height: 0.5,
                borderColor: "#292a2d",
              }}
            />
            <div
              onClick={() => {
                if (window.confirm("Are you sure you want to logout?")) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              className="px-3 py-2 cursor-pointer font-bold hover:bg-[#25292c]"
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
