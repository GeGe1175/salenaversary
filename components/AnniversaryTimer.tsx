
import React, { useState, useEffect } from 'react';

interface Props {
  startDate: Date;
}

const AnniversaryTimer: React.FC<Props> = ({ startDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-3 md:mx-6">
      <div className="text-3xl md:text-5xl font-serif-elegant text-rose-900 mb-1">{value}</div>
      <div className="text-xs md:text-sm uppercase tracking-widest text-rose-500 font-semibold">{label}</div>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-10 bg-white/50 backdrop-blur-sm rounded-full shadow-lg border border-rose-100 max-w-2xl mx-auto px-8">
      <TimeBlock value={timeLeft.days} label="Days" />
      <div className="text-rose-200 text-3xl font-light mb-4">:</div>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div className="text-rose-200 text-3xl font-light mb-4">:</div>
      <TimeBlock value={timeLeft.minutes} label="Mins" />
      <div className="text-rose-200 text-3xl font-light mb-4">:</div>
      <TimeBlock value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default AnniversaryTimer;
