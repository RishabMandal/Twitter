import "./App.css";
import ExploreSection from "./components/ExploreSection";
import MainFeed from "./components/MainFeed";
import Sidebar from "./components/Sidebar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Router>
        <div className="h-full justify-center bg-black flex">
          <Sidebar />
          <MainFeed />
          <ExploreSection />
        </div>
      </Router>
    </>
  );
}

export default App;
