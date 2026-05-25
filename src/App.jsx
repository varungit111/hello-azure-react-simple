import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(5 * 60);
  };

  const getEmoji = () => {
    if (timeLeft === 0) return "⏰";
    if (timeLeft <= 60) return "😰";
    if (timeLeft <= 180) return "🤔";
    return "😊";
  };

  return (
    <>
      <h1>Welcome to Varun's countdown - v5</h1>
      <div className="card">
        <h1 style={{ fontSize: "3rem" }}>{getEmoji()}</h1>
        <h2>5-Minute Countdown</h2>
        <div style={{ fontSize: "2rem", margin: "20px 0" }}>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
        <div>
          <button onClick={handleStartStop} style={{ marginRight: "10px" }}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <p style={{ marginTop: "20px" }}>
          {timeLeft === 0
            ? "Time's up! 🎉"
            : isRunning
            ? "Tick tock... ⏳"
            : "Ready to start? 🚀"}
        </p>
      </div>
    </>
  );
}

export default App;
