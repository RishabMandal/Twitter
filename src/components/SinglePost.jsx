import React, { useState, Fragment } from "react";
import InsidePost from "./InsidePost";
import { Dialog, Transition } from "@headlessui/react";
import TweetBox from "./TweetBox";

export default function SinglePost({
  name,
  profileName,
  tweet,
  hashtag,
  time,
  verified,
  settweets,
}) {
  const [Liked, setLiked] = useState(false);
  const [Insidepostview, setInsidepostview] = useState(false);

  //For dialog box on comment
  const [isOpen, setIsOpen] = useState(false);

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
            <img
              src="https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0"
              alt=""
              className="w-6 h-6 rounded-full"
            />
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
              onClick={() => setInsidepostview(!Insidepostview)}
              className="flex-col cursor-pointer ml-2 sm:flex md:flex lg:flex xl:flex 2xl:flex"
            >
              <div className="ml-1 text-sm">{tweet}</div>
              <div className="ml-1 text-blue-400 text-sm cursor-pointer">
                {hashtag}
              </div>
            </div>
            <div className="flex ml-3 mt-2 justify-evenly">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => setIsOpen(!isOpen)}
                className="w-5 h-5 stroke-stone-600  hover:stroke-blue-400"
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
                className="w-5 h-5 stroke-stone-600"
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
                className="w-5 h-5 stroke-stone-600 hover:stroke-blue-400"
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
                    className="w-5 h-5 my-2"
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
                        src="https://a.pinatafarm.com/312x296/ae7f8ccd22/sad-thumbs-up-cat.jpg/m/522x0"
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
                        onClick={() => setInsidepostview(!Insidepostview)}
                        className="flex-col cursor-pointer ml-2 sm:flex md:flex lg:flex xl:flex 2xl:flex"
                      >
                        <div className="ml-1 text-sm">{tweet}</div>
                        <div className="ml-1 text-blue-400 text-sm cursor-pointer">
                          {hashtag}
                        </div>
                      </div>
                      <div className="flex ml-3 mt-2 justify-evenly">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-5 h-5 stroke-stone-600  hover:stroke-blue-400"
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
                          className="w-5 h-5 stroke-stone-600"
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
                          className="w-5 h-5 stroke-stone-600 hover:stroke-blue-400"
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
                    <TweetBox />
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
