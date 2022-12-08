import React, { useState, useEffect, useRef } from "react";
// import "emoji-mart/css/emoji-mart.css";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function TweetBox({
  Input,
  setInput,
  setImageInput,
  username,
  useremail,
}) {
  const [LocalInput, setLocalInput] = useState(null);
  const [SelectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [ShowEmojis, setShowEmojis] = useState(false);
  const [alertstate, setalertstate] = useState(false);

  const textareainput = useRef(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  function addTweet() {
    if (LocalInput) {
      setInput(LocalInput);
      textareainput.current.value = null;
    }
    if (SelectedFile) {
      setImageInput(SelectedFile);
      setSelectedFile(null);
    }
  }

  function addEmoji(e) {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setLocalInput(LocalInput + emoji);
    textareainput.current.value += emoji;
  }

  return (
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
          ref={textareainput}
          onChange={(event) => {
            setLocalInput(event.target.value);
          }}
          placeholder="What's happening?"
          className="ml-3 mb-1 p-1 text-sm my-auto w-full bg-black placeholder:text-stone-600"
        ></textarea>
      </div>

      {/* Selectef file  */}
      {SelectedFile && (
        <div>
          <div className="cursor-pointer" onClick={() => setSelectedFile(null)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <img src={SelectedFile} className="max-h-80 object-contain" alt="" />
        </div>
      )}

      {/* Alert */}
      {alertstate && (
        <div
          className="bg-blue-500 flex rounded-xl fixed top-0 z-20 border-t border-b border-blue-500 text-white px-4 py-3"
          role="alert"
        >
          <p className="font-semibold">Your tweet was sent.</p>
          <button
            onClick={() => setalertstate(!alertstate)}
            className="font-bold mx-2"
          >
            Ok
          </button>
        </div>
      )}
      <div className="flex">
        <div className="flex ml-10 my-2 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => filePickerRef.current.click()}
            className="w-5 h-5 cursor-pointer stroke-blue-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <input
            type="file"
            onChange={addImageToPost}
            hidden
            ref={filePickerRef}
          />

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
          <div className="flex-col space-y-2">
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
              <div className="sticky top-0 max-w-[320px] ml-[-80px]">
                <Picker onEmojiSelect={addEmoji} />
              </div>
            )}
          </div>
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
          onClick={() => {
            addTweet();
            LocalInput ? setalertstate(!alertstate) : setalertstate(alertstate);
          }}
          className="ml-auto my-auto mr-1 text-sm rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-1 h-7 text-center font-semibold"
        >
          Tweet
        </div>
      </div>
    </div>
  );
}
