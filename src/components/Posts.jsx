import React from "react";
import SinglePost from "./SinglePost";
import { useState } from "react";

export default function Posts({ tweets, settweets }) {
  return (
    <div>
      {/* Basically we are using many single posts, putting data into them */}
      {/* and displaying them at once here  */}
      {/* <SinglePost /> */}
      {tweets.map((singletweet) => (
        <SinglePost
          name={singletweet.name}
          profileName={singletweet.profileName}
          tweet={singletweet.tweet}
          hashtag={singletweet.hashtag}
          time={singletweet.time}
          verified={singletweet.verified}
          settweets={settweets}
        />
      ))}
    </div>
  );
}
