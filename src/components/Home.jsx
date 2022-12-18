import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import TweetBox from "./TweetBox";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
} from "firebase/firestore";

export default function Home({ username, useremail }) {
  const [Input, setInput] = useState(null);
  const [ImageInput, setImageInput] = useState(null);
  const [tweets, settweets] = useState();

  //   const Add = () => {
  //     const docRef = addDoc(collection(db, "users"), {
  //       tweets: tweets,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   };

  // Read from db
  useEffect(() => {
    see();
  }, []);

  async function see() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      settweets(doc.data().tweets);
    });
  }

  useEffect(() => {
    if (tweets) {
      update();
    }
  }, [tweets || username]);

  // Update db
  async function update() {
    await updateDoc(doc(db, "users", "Comments"), {
      tweets: tweets,
    });
  }

  useEffect(() => {
    if (Input) {
      settweets((tweets) => [
        {
          name: username,
          profileName: "@Sktch_ComedyFan",
          tweet: Input,
          hashtag: "#heregoesnothing",
          time: "3m",
          profilepic:
            localStorage.getItem("profile pic") ||
            "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
          img: ImageInput,
          verified: true,
        },
        ...tweets,
      ]);
    }
  }, [Input]);

  return (
    <>
      <div className="w-full max-w-[600px] bg-[#292a2d]">
        <div className="mx-[0.05rem] h-full bg-black text-white">
          {/* Actual content after login  */}
          <div className="flex sticky top-0 bg-black z-10">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="p-2 font-bold cursor-pointer"
            >
              Home
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              // onClick={Add}
              className="w-6 h-6 my-auto ml-auto mr-2 cursor-pointer rotate-180"
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
          <TweetBox
            Input={Input}
            setInput={setInput}
            ImageInput={ImageInput}
            setImageInput={setImageInput}
            username={username}
            useremail={useremail}
          />
          <hr
            style={{
              color: "#292a2d",
              backgroundColor: "#292a2d",
              height: 10.5,
              borderColor: "#292a2d",
            }}
          />
          {tweets && (
            <Posts
              tweets={tweets}
              settweets={settweets}
              username={username}
              useremail={useremail}
            />
          )}
        </div>
      </div>
    </>
  );
}
