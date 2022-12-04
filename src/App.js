import "./App.css";
import ExploreSection from "./components/ExploreSection";
import MainFeed from "./components/MainFeed";
import Sidebar from "./components/Sidebar";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen justify-center bg-black flex">
          <Sidebar />
          <MainFeed />
          <ExploreSection />
        </div>
      </Router>
    </>
  );
}

export default App;
