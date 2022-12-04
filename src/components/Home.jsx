import React from "react";
import Posts from "./Posts";
import TweetBox from "./TweetBox";

export default function Home() {
  return (
    <div className="w-full max-w-[600px] bg-[#292a2d]">
      <div className="mx-[0.05rem] h-full bg-black text-white">
        {/* Actual content after login  */}
        <div className="p-2 font-bold">Home</div>
        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 0.5,
            borderColor: "#292a2d",
          }}
        />
        <TweetBox />
        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 10.5,
            borderColor: "#292a2d",
          }}
        />
        <Posts />
      </div>
    </div>
  );
}
