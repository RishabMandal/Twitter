import React from "react";
import Explore from "./Explore";
import Home from "./Home";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./Settings";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import Messages from "./Messages";

export default function MainFeed({ username, useremail }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home username={username} useremail={useremail} />}
        />
        <Route
          path="/explore"
          element={<Explore username={username} useremail={useremail} />}
        />
        <Route
          path="/notifications"
          element={<Notifications username={username} useremail={useremail} />}
        />
        <Route
          path="/messages"
          element={<Messages username={username} useremail={useremail} />}
        />
        <Route
          path="/bookmarks"
          element={<Bookmarks username={username} useremail={useremail} />}
        />
        <Route
          path="/profile"
          element={<Profile username={username} useremail={useremail} />}
        />
        <Route
          path="/settings"
          element={<Settings username={username} useremail={useremail} />}
        />
      </Routes>
    </>
  );
}
