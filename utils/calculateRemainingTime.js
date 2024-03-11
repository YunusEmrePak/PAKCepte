export function calculateRemainingTime(scheduleData) {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Find the next matching or upcoming hour/minute
  let nextTime = scheduleData.find(
    (entry) =>
      entry.hour > currentHour ||
      (entry.hour === currentHour && entry.minute > currentMinute)
  );

  // If nothing found for today, get the first entry for tomorrow
  if (!nextTime) {
    nextTime = scheduleData[0];
  }

  // Special handling if current minute is already past the target minute
  if (nextTime.hour === currentHour && nextTime.minute <= currentMinute) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); // Get the same time tomorrow
    tomorrow.setHours(nextTime.hour);
    tomorrow.setMinutes(nextTime.minute);
    tomorrow.setSeconds(0);

    const diffInMS = tomorrow.getTime() - now.getTime();
    const minutesRemaining = Math.ceil(diffInMS / (1000 * 60));
    return minutesRemaining;
  }

  // Regular calculation
  const targetTime = new Date();
  targetTime.setHours(nextTime.hour);
  targetTime.setMinutes(nextTime.minute);
  targetTime.setSeconds(0);

  const diffInMS = targetTime.getTime() - now.getTime();
  const minutesRemaining = Math.ceil(diffInMS / (1000 * 60));
  return minutesRemaining;
}
