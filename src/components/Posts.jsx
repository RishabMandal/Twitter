import React from "react";
import SinglePost from "./SinglePost";
import { useState } from "react";

export default function Posts({ tweets, settweets, username, useremail }) {
  return (
    <div>
      {/* Basically we are using many single posts, putting data into them */}
      {/* and displaying them at once here  */}
      {/* <SinglePost /> */}
      {tweets.map((singletweet, index) => (
        <SinglePost
          key={index}
          name={singletweet.name}
          profileName={singletweet.profileName}
          tweet={singletweet.tweet}
          hashtag={singletweet.hashtag}
          time={singletweet.time}
          profilepic={singletweet.profilepic}
          verified={singletweet.verified}
          postimage={singletweet.img}
          tweets={tweets}
          settweets={settweets}
          setCommentvisibility={false}
          username={username}
          index={index}
        />
      ))}
    </div>
  );
}
