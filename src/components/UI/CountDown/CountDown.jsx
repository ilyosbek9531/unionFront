import { useState, useEffect } from "react";
import styles from "./CountDown.module.scss";

const CountDown = () => {
  const initialSeconds = 60;
  const [time, setTime] = useState({
    minutes: Math.floor(initialSeconds / 60),
    seconds: initialSeconds % 60,
  });
  const [showResendLink, setShowResendLink] = useState(false);

  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) {
      setShowResendLink(true);
    } else {
      const interval = setInterval(() => {
        if (time.seconds === 0) {
          setTime({ minutes: time.minutes - 1, seconds: 59 });
        } else {
          setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);

  const handleResendClick = () => {
    setTime({
      minutes: Math.floor(initialSeconds / 60),
      seconds: initialSeconds % 60,
    });
    setShowResendLink(false);
  };

  const formatTime = (time) => {
    const minutes = String(time.minutes).padStart(2, "0");
    const seconds = String(time.seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles.countdownTimer}>
      {showResendLink ? (
        <div>
          <span onClick={handleResendClick} className={styles.resendLink}>
            Resend Password
          </span>
        </div>
      ) : (
        <div className={styles.timer}>
          <p>
            Faollashtirish kodi ushbu nomerga yuborildi kod terish vaqti tugaydi
          </p>
          <span>{formatTime(time)}</span>
        </div>
      )}
    </div>
  );
};

export default CountDown;
