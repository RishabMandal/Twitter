import "./App.css";
import { useEffect, useState } from "react";
import ExploreSection from "./components/ExploreSection";
import MainFeed from "./components/MainFeed";
import Sidebar from "./components/Sidebar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";
import { data } from "autoprefixer";

function App() {
  const [signin, setsignin] = useState(false);
  const [useremail, setuseremail] = useState();
  const [username, setusername] = useState();
  // const userid =
  function handlesignin() {
    signInWithPopup(auth, provider).then((data) => {
      setuseremail(data.user.email);
      setusername(data.user.displayName);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.displayName);
    });
  }

  useEffect(() => {
    setuseremail(localStorage.getItem("email"));
    if (useremail) {
      setsignin(true);
    }
  });

  return (
    <>
      {!signin && (
        <div className="w-screen h-screen bg-gray-800 text-white">
          {/* <div className="mx-auto"> */}
          <div className="bg-black h-auto rounded-xl w-fit mx-auto p-2">
            <div>
              <img
                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
                alt=""
                className="mb-2 h-6 w-6 cursor-pointer mx-auto"
              />
            </div>
            <div className="mx-8">
              <div className="font-bold my-4 text-2xl">Sign in to Twitter</div>
              <div
                onClick={handlesignin}
                className="cursor-pointer px-10 py-1 text-sm font-semibold bg-white rounded-full text-black"
              >
                Sign in with Google
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}

      {signin && (
        <Router>
          <div className="h-full justify-center bg-black flex">
            <Sidebar username={username} useremail={useremail} />
            <MainFeed username={username} useremail={useremail} />
            <ExploreSection username={username} useremail={useremail} />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
