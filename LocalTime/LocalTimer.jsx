import { useState, useEffect } from "react";

function LocalTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Current Time</h2>
      <h1>{currentTime.toLocaleTimeString()}</h1>
      <h3>{currentTime.toLocaleDateString()}</h3>
    </div>
  );
}

export default LocalTime;