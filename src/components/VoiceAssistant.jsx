import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

export default function VoiceAssistant({ UserContext }) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  var time =
    current.getHours() + " hours and " + current.getMinutes() + " minutes";

  //
  // Voice Recognition Assistant

  const { speak, voices } = useSpeechSynthesis();
  const { listening } = useSpeechRecognition();
  const voice = voices[6];
  const commands = [
    {
      command: ["Hi", "Hey", "Hey there", "Hello"],
      callback: () => speak({ text: "Hey there", voice }),
    },
    {
      command: ["What can you do"],
      callback: () => speak({ text: "Hmmm, seems a good question", voice }),
    },
    {
      command: ["* today's date", "today's date"],
      callback: () => speak({ text: date, voice }),
    },
    {
      command: [
        "* today's time",
        "today's time",
        "current time",
        "* current time",
      ],
      callback: () => speak({ text: "It is" + time, voice }),
    },
    {
      command: ["Good morning", "* good morning"],
      callback: () => speak({ text: "Good morning", voice }),
    },
    {
      command: "Good afternoon",
      callback: () => speak({ text: "Good afternoon", voice }),
    },
    {
      command: "Good evening",
      callback: () => speak({ text: "Good evening, nice to meet you", voice }),
    },
    {
      command: ["nice to meet you", "* nice to meet you"],
      callback: () => speak({ text: "Nice to meet you too, so kind of you", voice }),
    },
    {
      command: "Good night",
      callback: () =>
        speak({
          text: "Good night, I hope the happiest dreams are coming to you",
          voice,
        }),
    },
    {
      command: "Scroll to top",
      callback: () => {
        speak({ text: "Ok", voice });
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div>
      {/* VoiceAssistant */}
      <div className="fixed bottom-20 right-10 z-30 text-white">
        {/* <p id="transcript">Transcript: {transcript}</p> */}
        <p id="transcript"> {transcript}</p>
        {!listening && (
          <button
          className="justify-center mx-auto mt-1 flex"
          onClick={SpeechRecognition.startListening}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-500 border border-blue-500 bg-transparent hover:bg-blue-500 rounded-full p-1 hover:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
          {/* Start Listening */}
        </button>
        )}
        {/* {listening && <div>Go ahead I'm listening</div>} */}
        {listening && (
          <button
            className="bg-gray-800 rounded-lg p-2"
            onClick={() => {
              SpeechRecognition.abortListening();
              SpeechRecognition.stopListening();
            }}
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
}
