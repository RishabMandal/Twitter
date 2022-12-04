import React from "react";
import Explore from "./Explore";
import Home from "./Home";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Settings from "./Settings";

export default function MainFeed() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
