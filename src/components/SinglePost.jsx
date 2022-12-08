import React, { useState, useEffect, Fragment } from "react";
import InsidePost from "./InsidePost";
import { Dialog, Transition } from "@headlessui/react";
import TweetBox from "./TweetBox";
import Picker from "@emoji-mart/react";
// import { db } from "../firebase";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   deleteDoc,
//   doc,
//   updateDoc,
//   query,
// } from "firebase/firestore";

export default function SinglePost({
  name,
  profileName,
  tweet,
  hashtag,
  time,
  profilepic,
  verified,
  postimage,
  tweets,
  settweets,
  setCommentvisibility,
  username,
  index,
}) {
  const [Liked, setLiked] = useState(false);
  const [Insidepostview, setInsidepostview] = useState(false);

  //For dialog box on replying to comment
  const [isOpen, setIsOpen] = useState(false);

  // Viewing Comments section
  const [Commenttweets, setCommenttweets] = useState([
    {
      name: "Powerbilla",
      profileName: "@Sktch_ComedyFan",
      tweet: "Giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:
        "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: true,
    },
    {
      name: "CatMemer",
      profileName: "@Sktch_ComedyFan",
      tweet: "Giving standup comedy a go",
      hashtag: "#heregoesnothing",
      time: "3m",
      profilepic:
        "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
      img: null,
      verified: false,
    },
  ]);
  const [LocalInput, setLocalInput] = useState(null);
  const [CommentInput, setCommentInput] = useState(null);
  //   const [SelectedFile, setSelectedFile] = useState(null);
  const [ShowEmojis, setShowEmojis] = useState(false);

  function addTweet() {
    if (LocalInput) {
      setCommentInput(LocalInput);
    }
  }

  //Delete tweet
  function removeTweet(index) {
    const newTweets = [...tweets];
    newTweets.splice(index, 1);
    settweets(newTweets);
  }

//   //
//   // Read from db
//   useEffect(() => {
//     see();
//   }, []);

//   async function see() {
//     const querySnapshot = await getDocs(collection(db, "users", "Comments"));
//     querySnapshot.forEach((doc) => {
//       settweets(doc.data().tweets);
//     });
//   }

//   useEffect(() => {
//     if (tweets) {
//       update();
//     }
//   }, [tweets]);

//   // Update db
//   async function update() {
//     await updateDoc(doc(db, "users", "Comments"), {
//       Commenttweets: Commenttweets,
//     });
//   }

  useEffect(() => {
    if (CommentInput) {
      setCommenttweets((Commenttweets) => [
        ...Commenttweets,
        {
          name: username,
          profileName: "@Sktch_ComedyFan",
          tweet: CommentInput,
          hashtag: "#heregoesnothing",
          time: "3m",
          profilepic:
            localStorage.getItem("profile pic") ||
            "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0",
          img: null,
          verified: true,
        },
      ]);
    }
  }, [CommentInput]);

  return (
    <>
      <hr
        style={{
          color: "#292a2d",
          backgroundColor: "#292a2d",
          height: 0.5,
          borderColor: "#292a2d",
        }}
      />
      <div className="m-2 relative">
        <div className="flex">
          <div className="">
            <img src={profilepic} alt="" className="w-6 h-6 rounded-full" />
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="ml-3 text-sm my-auto font-semibold">{name}</div>
              {/* Blue verified tick */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png"
                alt=""
                className={`${verified ? "" : "hidden"} w-4 h-4 my-auto ml-1`}
              />
              <div className="ml-1 text-sm my-auto text-stone-600">
                {profileName}
              </div>
              <div className="ml-1 text-sm my-auto text-stone-600">
                . {time}
              </div>
              <div className="ml-auto text-sm my-auto text-stone-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:stroke-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
            <div
              onClick={() =>
                !setCommentvisibility && setInsidepostview(!Insidepostview)
              }
              className="flex-col cursor-pointer ml-2 sm:flex md:flex lg:flex xl:flex 2xl:flex"
            >
              <div className="ml-1 text-sm">{tweet}</div>
              <div className="ml-1 text-blue-400 text-sm cursor-pointer">
                {hashtag}
              </div>
              <img src={postimage} alt="" className="m-2 rounded-xl" />
            </div>
            <div className="flex ml-3 mt-2 justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => setIsOpen(!isOpen)}
                className="w-5 h-5 cursor-pointer stroke-stone-600  hover:stroke-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>

              {/* Delete functionality button  */}
              {name === username && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => removeTweet(index)}
                  className="w-5 h-5 cursor-pointer text-stone-600 hover:text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              )}

              {name !== username && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer text-stone-600 hover:text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => setLiked(!Liked)}
                className={`${
                  Liked ? "fill-pink-600 cursor-pointer stroke-pink-600" : ""
                } w-5 h-5 stroke-stone-600 cursor-pointer hover:stroke-pink-600`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              {/* Edit button  */}
              {name === username && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 cursor-pointer stroke-stone-600 hover:stroke-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
              )}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer stroke-stone-600 hover:stroke-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
          </div>
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
      {Insidepostview && (
        <>
          <InsidePost
            Insidepostview={Insidepostview}
            setInsidepostview={setInsidepostview}
            Commenttweets={Commenttweets}
            setCommenttweets={setCommenttweets}
          />
          <hr
            style={{
              color: "#292a2d",
              backgroundColor: "#292a2d",
              height: 0.5,
              borderColor: "#292a2d",
            }}
          />
        </>
      )}

      {/* Comment dialogue box */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          className="fixed top-10 left-1/4 z-2"
          onClose={() => setIsOpen(false)}
        >
          {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="inset-0 w-[800px] bg-black/30" />
          </Transition.Child>

          {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel>
              <div>
                <div className="p-2 rounded-xl w-[800px] bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    onClick={() => setIsOpen(false)}
                    className="w-5 h-5 my-2 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <hr
                    style={{
                      color: "#292a2d",
                      backgroundColor: "#292a2d",
                      height: 1.5,
                      borderColor: "#292a2d",
                    }}
                  />

                  <div className="flex m-2">
                    <div className="">
                      <img
                        src={profilepic}
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                    </div>
                    <div className="w-full">
                      <div className="flex">
                        <div className="ml-3 text-sm my-auto font-semibold">
                          {name}
                        </div>
                        {/* Blue verified tick */}
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png"
                          alt=""
                          className={`${
                            verified ? "" : "hidden"
                          } w-4 h-4 my-auto ml-1`}
                        />
                        <div className="ml-1 text-sm my-auto text-stone-600">
                          {profileName}
                        </div>
                        <div className="ml-1 text-sm my-auto text-stone-600">
                          . {time}
                        </div>
                        <div className="ml-auto text-sm my-auto text-stone-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 hover:stroke-blue-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        // onClick={() => setInsidepostview(!Insidepostview)}
                        className="flex-col cursor-pointer ml-2 sm:flex md:flex lg:flex xl:flex 2xl:flex"
                      >
                        <div className="ml-1 text-sm">{tweet}</div>
                        <div className="ml-1 text-blue-400 text-sm cursor-pointer">
                          {hashtag}
                        </div>
                        <img
                          src={postimage}
                          alt=""
                          className="m-2 rounded-xl"
                        />
                      </div>
                      <div className="flex ml-3 mt-2 justify-evenly">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-5 h-5 cursor-pointer stroke-stone-600  hover:stroke-blue-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 cursor-pointer text-stone-600 hover:text-green-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          onClick={() => setLiked(!Liked)}
                          className={`${
                            Liked ? "fill-pink-600 stroke-pink-600" : ""
                          } w-5 h-5 stroke-stone-600 hover:stroke-pink-600`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 cursor-pointer stroke-stone-600 hover:stroke-blue-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <TweetBox /> */}
                    <div className="m-2">
                      <div className="flex">
                        <div className="">
                          <img
                            src={
                              localStorage.getItem("profile pic") ||
                              "https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0"
                            }
                            alt=""
                            className="w-6 h-6 rounded-full"
                          />
                        </div>
                        <textarea
                          onChange={(event) => {
                            setLocalInput(event.target.value);
                          }}
                          placeholder="What's happening?"
                          className="ml-3 mb-1 p-1 text-sm my-auto w-full bg-black placeholder:text-stone-600"
                        ></textarea>
                      </div>
                      <div className="flex">
                        <div className="flex ml-10 my-2 space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer stroke-blue-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer stroke-blue-400"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer stroke-blue-400"
                            onClick={() => setShowEmojis(!ShowEmojis)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>
                          {ShowEmojis && (
                            <Picker
                            //   onSelect={addEmoji}
                            // className="fixed mt-[465px]"
                            // onEmojiSelect={addEmo}
                            />
                          )}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 cursor-pointer stroke-blue-400 rotate-90"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                            />
                          </svg>
                        </div>
                        <div
                          onClick={addTweet}
                          className="ml-auto my-auto mr-1 text-sm rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-1 h-7 text-center font-semibold"
                        >
                          Tweet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
