export function calculateRemainingTime(scheduleData) {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  let nextTime = scheduleData.find(
    (entry) =>
      entry.hour > currentHour ||
      (entry.hour === currentHour && entry.minute >= currentMinute)
  );

  if (!nextTime) {
    nextTime = scheduleData[0];
  }

  const targetTime = new Date();
  targetTime.setHours(nextTime.hour);
  targetTime.setMinutes(nextTime.minute);
  targetTime.setSeconds(0);

  const diffInMS = targetTime.getTime() - now.getTime();

  const minutesRemaining = Math.ceil(diffInMS / (1000 * 60));

  if (currentMinute === nextTime.minute) {
    if (diffInMS >= minutesRemaining * 60000 - 20000) {
      return "0";
    } else if (diffInMS >= minutesRemaining * 60000 - 50000) {
      return "Geldi";
    } else {
      let nextTime = scheduleData.find(
        (entry) =>
          entry.hour > currentHour ||
          (entry.hour === currentHour && entry.minute > currentMinute)
      );
      return nextTime.hour > currentHour ? nextTime.minute + 60 - currentMinute : nextTime.minute - currentMinute;
    }
  } else {
    return minutesRemaining;
  }
}
