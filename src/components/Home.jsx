import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import TweetBox from "./TweetBox";

export default function Home() {
  const [Input, setInput] = useState(null);
  const [tweets, settweets] = useState([
    {
      name: "Powerbilla",
      profileName: "@Sktch_ComedyFan",
      tweet: "Giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:"https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: true,
    },
    {
      name: "Powerbilla",
      profileName: "@Sktch_ComedyFan",
      tweet: "Thinking of giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:"https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: false,
    },
    {
      name: "Hitesh Rajpurohitt",
      profileName: "@Rajpurohitjiblrr",
      tweet: "Meanwhile Exit polls to all opposition party's",
      hashtag: "#ExitPolls",
      time: "3m",
      profilepic:
        "https://pbs.twimg.com/profile_images/1329363928430743552/Dl0XjSW-_400x400.jpg",
      img: "https://pbs.twimg.com/media/FjNfWyRUAAESd2V?format=jpg&name=360x360",
      verified: false,
    },
    {
      name: "Powerbilla",
      profileName: "@Sktch_ComedyFan",
      tweet: "Giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:"https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: false,
    },
    {
      name: "Powerbilla",
      profileName: "@Sktch_ComedyFan",
      tweet: "Giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:"https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: false,
    },
  ]);

  useEffect(() => {
    settweets((tweets) => [
      ...tweets,
      {
        name: "Powerbilla",
        profileName: "@Sktch_ComedyFan",
        tweet: Input,
        hashtag: "#heregoesnothing",
        time: "3m",
        profilepic:"https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
        verified: true,
      },
    ]);
    // console.log(Input);
  }, [Input]);

  return (
    <div className="w-full max-w-[600px] bg-[#292a2d]">
      <div className="mx-[0.05rem] h-full bg-black text-white">
        {/* Actual content after login  */}
        <div className="flex sticky top-0">
          <div className="p-2 font-bold">Home</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 my-auto ml-auto mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </div>

        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 0.5,
            borderColor: "#292a2d",
          }}
        />
        <TweetBox Input={Input} setInput={setInput} />
        <hr
          style={{
            color: "#292a2d",
            backgroundColor: "#292a2d",
            height: 10.5,
            borderColor: "#292a2d",
          }}
        />
        <Posts tweets={tweets} settweets={settweets} />
      </div>
    </div>
  );
}
