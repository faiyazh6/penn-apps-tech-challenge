import React, { useState, useEffect } from 'react';
import './Countdown.css';

export const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Set the target date to 27 February 2024, 6:00 PM ET
    const targetDate = new Date('2024-02-27T18:00:00-05:00');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const totalSeconds = (targetDate - currentDate) / 1000;

            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            } else {
                setDays(Math.floor(totalSeconds / 3600 / 24));
                setHours(Math.floor((totalSeconds / 3600) % 24));
                setMinutes(Math.floor((totalSeconds / 60) % 60));
                setSeconds(Math.floor(totalSeconds % 60));
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="countdown-container">
            <div className="countdown-box">
                <div className="countdown-values">
                    <div className="countdown-value">
                        <div className="big-text">{days}</div>
                        <div className="word-display">DAYS</div>
                    </div>
                </div>
            </div>

            <div className="countdown-box">
                <div className="countdown-values">
                    <div className="countdown-value">
                        <div className="big-text">{hours}</div>
                        <div className="word-display">HOURS</div>
                    </div>
                </div>
            </div>

            <div className="countdown-box">
                <div className="countdown-values">
                    <div className="countdown-value">
                        <div className="big-text">{minutes}</div>
                        <div className="word-display">MINUTES</div>
                    </div>
                </div>
            </div>

            <div className="countdown-box">
                <div className="countdown-values">
                    <div className="countdown-value">
                        <div className="big-text">{seconds}</div>
                        <div className="word-display">SECONDS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;