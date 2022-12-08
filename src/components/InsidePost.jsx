import React from "react";
import SinglePost from "./SinglePost";

export default function InsidePost({
  Insidepostview,
  setInsidepostview,
  Commenttweets,
  setCommenttweets,
}) {
  return (
    <div>
      <hr
        style={{
          color: "#292a2d",
          backgroundColor: "#292a2d",
          height: 1.5,
          borderColor: "#292a2d",
        }}
      />
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setInsidepostview(!Insidepostview)}
          className="w-4 h-4 my-auto hover:stroke-blue-400 mx-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="font-semibold">Tweets</div>
      </div>
      <div className="text-xs mx-2 my-1">View tweets on this tweet</div>
      {Commenttweets.map((singletweet, index) => (
        <SinglePost
          name={singletweet.name}
          profileName={singletweet.profileName}
          tweet={singletweet.tweet}
          hashtag={singletweet.hashtag}
          time={singletweet.time}
          profilepic={singletweet.profilepic}
          verified={singletweet.verified}
          postimage={singletweet.img}
          setCommenttweets={setCommenttweets}
          setCommentvisibility={true}
          Commentindex={index}
        />
      ))}
      <hr
        style={{
          color: "#292a2d",
          backgroundColor: "#292a2d",
          height: 2.5,
          borderColor: "#292a2d",
        }}
      />

      <div className="text-sm mx-2 my-1">Also view other posts</div>
    </div>
  );
}
