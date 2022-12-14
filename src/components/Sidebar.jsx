import React from "react";
import { Link } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import { useSpeechSynthesis } from "react-speech-kit";
import VoiceAssistant from "./VoiceAssistant";

export default function Sidebar({ username, useremail }) {
  //   const { speak } = useSpeechSynthesis();

  //   // Voice Recognition Assistant
  //   const commands = [
  //     // {
  //     //   command: [
  //     //     "Go to * page",
  //     //     "Go to *page",
  //     //     "Go to * tab",
  //     //     "Proceed to *",
  //     //     "Go to *",
  //     //     "go to *",
  //     //     "Open * page",
  //     //     "Open *",
  //     //   ],
  //     //   callback: (redirectPage) => setRedirectUrl(redirectPage),
  //     // },
  //     {
  //       command: "Good morning",
  //       callback: () => speak({ text: "Good morning" }),
  //     },
  //     {
  //       command: "Scroll to top",
  //       callback: () => {
  //         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //       },
  //     },
  //   ];

  //   const { transcript } = useSpeechRecognition({ commands });
  //   const [redirectUrl, setRedirectUrl] = useState("");
  //   const pages = [
  //     "home",
  //     "explore",
  //     "notifications",
  //     "messages",
  //     "bookmarks",
  //     "profile",
  //     "settings",
  //   ];
  //   const urls = {
  //     home: "/",
  //     explore: "/explore",
  //     notifications: "/notifications",
  //     messages: "/messages",
  //     bookmarks: "/bookmarks",
  //     profile: "/profile",
  //     settings: "/settings",
  //   };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  //   let redirect = "";

  //   //   if (redirectUrl) {
  //   //     if (pages.includes(redirectUrl)) {
  //   //       redirect = <Navigate replace to={urls[redirectUrl]} />;
  //   //       //   redirect = <Navigate replace={true} to={urls[redirectUrl]} />;
  //   //     } else {
  //   //       redirect = <p>Could not find page: {redirectUrl}</p>;
  //   //     }
  //   //   }
  //   if (redirectUrl) {
  //     if (pages.includes(redirectUrl)) {
  //       //   navigate(urls[redirectUrl]);
  //       //   return navigate(urls[redirectUrl]);
  //       //   {<Navigate to={urls[redirectUrl]} />;}
  //       //   {
  //       //     statey && (redirect = <Navigate to={urls[redirectUrl]} />);
  //       //   }
  //       //   setstatey(false);
  //       //   redirect=navigate(urls[redirectUrl]);
  //     } else {
  //     }
  //   }

  return (
    <div className="hidden min-h-screen sticky top-0 sm:flex md:flex lg:flex xl:flex 2xl:flex flex-col lg:w-1/4 xl:w-1/4 2xl:w-1/4 max-w-[300px] h-full py-3 px-7 bg-black text-white">
      <Link to="/explore">
        <img
          src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
          alt=""
          className="ml-3 mb-2 h-6 w-6 cursor-pointer"
        />
      </Link>
      <Link
        to="/"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Home
        </h1>
      </Link>
      <Link
        to="/explore"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
          />
        </svg>
        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Explore
        </h1>
      </Link>
      <Link
        to="/notifications"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Notifications
        </h1>
      </Link>
      <Link
        to="/messages"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Messages
        </h1>
      </Link>
      <Link
        to="/bookmarks"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>

        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Bookmarks
        </h1>
      </Link>
      <Link
        to="/profile"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Profile
        </h1>
      </Link>
      <Link
        to="/settings"
        className="flex flex-row space-x-4 px-3 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h1 className="hidden md:block lg:block xl:block 2xl:block text-md font-bold">
          Settings
        </h1>
      </Link>
      <Link
        to="/"
        className="hidden transition ease-in md:block lg:block xl:block 2xl:block my-2 rounded-full bg-blue-500 hover:bg-blue-600 cursor-pointer px-3 py-2 text-center font-semibold"
      >
        Tweet
      </Link>
      <Link
        to="/profile"
        className="mt-auto text-xs hidden md:flex lg:flex xl:flex 2xl:flex my-2 rounded-full bg-stone-900 hover:bg-stone-800 cursor-pointer px-3 py-2 font-semibold"
      >
        <div>
          <div className="font-bold">{username}</div>
          <div className="text-stone-400">@PowerBilla829</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </Link>

      {/* // Voice assistant  */}
      <div className="fixed bottom-20 right-10 z-30 bg-black">
        {/* <div className="hidden">{redirect}</div> */}
        {/* <p id="transcript">Transcript: {transcript}</p>
        <button
          className="ml-auto mx-3 flex"
          onClick={SpeechRecognition.startListening}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
          Start Listening
        </button>

        <button
          className="ml-auto mx-3"
          onClick={() => {
            SpeechRecognition.abortListening();
            SpeechRecognition.stopListening();
          }}
        >
          Stop
        </button> */}
        <VoiceAssistant />
      </div>
    </div>
  );
}
