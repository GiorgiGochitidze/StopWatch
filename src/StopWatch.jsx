import React, { useState, useEffect } from 'react';

const StopWatch = () => {
  const [countdownTime, setCountdownTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCountdownTime((prevTime) => prevTime + 1);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  //formating timer difning hours minute seconds and miliseconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    return `${hours}:${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
  };

  const padNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  const handleStartStopClick = () => {
    setIsRunning((prevState) => !prevState);
  };


  return (
    <div className='timer-container' onClick={handleStartStopClick}>
      <h1 style={{position: 'fixed'}}>{formatTime(countdownTime)}</h1>
    </div>
  );
};

export default StopWatch;
