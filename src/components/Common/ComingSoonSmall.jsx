import { useCallback, useEffect, useState } from "react";
import comingSoon from "@/assets/images/coming-soon.png";

const padNumber = (num) => String(num).padStart(2, "0");

const ComingSoon = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="flex flex-col items-center justify-center p-4 w-[50%]">
      <img src={comingSoon} alt="Coming Soon" className="w-[50%]" />
      <div className="text-gray-700 text-5xl p-6">
        <span>{padNumber(timeLeft.days)}:</span>
        <span>{padNumber(timeLeft.hours)}:</span>
        <span>{padNumber(timeLeft.minutes)}:</span>
        <span>{padNumber(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default ComingSoon;
