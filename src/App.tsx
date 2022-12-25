import React from "react";
import "./App.css";
import LaunchDashboard from "./screens/Launchdashboard";

function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-center items-center">
        SpaceX
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <div className="w-full h-10 pt-32 text-5xl text-cyan-600 mb-20 font-bold text-center">
        SpaceX Past Launches
      </div>
      <LaunchDashboard />
      <body className="app-body "></body>
    </div>
  );
}

export default App;
