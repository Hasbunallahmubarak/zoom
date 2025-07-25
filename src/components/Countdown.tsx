import { useState, useEffect } from "react";
const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const countDownObj = {
    first: days,
    second: hours,
    third: minutes,
    fourth: seconds,
  };
  useEffect(() => {
    let intervalId = setInterval(() => {
      const currentDate = new Date();
      let targetDate = new Date("Dec 07 2025 11:59:59");
      let difference: number = Number(Number(targetDate) - Number(currentDate));

      if (difference <= 0) {
        // Optional: handle countdown finished
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { first, second, third, fourth } = countDownObj;
  return (
    <div>
      <div className="flex justify-between gap-5 text-center">
        <li className="inline-block w-20 ">
          <h3 className=" border-b-4 border-b-error p-5 text-2xl">{first}</h3>
          <p className="opacity-90 uppercase text-xs mt-1"> Days </p>
        </li>
        <li className="inline-block w-20 overflow-hidden">
          <h3 className=" border-b-4 border-b-error p-5 text-2xl">{second}</h3>
          <p className="opacity-90 uppercase text-xs mt-1">Hours</p>
        </li>
        <li className="inline-block w-20 overflow-hidden">
          <h3 className=" border-b-4 border-b-error p-5 text-2xl">{third}</h3>
          <p className="opacity-90 uppercase text-xs mt-1">Minutes</p>
        </li>
        <li className="inline-block w-20 overflow-hidden">
          <h3 className=" border-b-4 border-b-error p-5 text-2xl">{fourth}</h3>
          <p className="opacity-90 uppercase text-xs mt-1"> Seconds </p>
        </li>
      </div>
    </div>
  );
};

export default Countdown;
