import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./data/timelineItems.js";
import Timeline from "./Timeline";

function App() {
  return (
    <div>
      <h2>Airtable Timeline</h2>
      <Timeline items={timelineItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);