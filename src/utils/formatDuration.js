export const formatDuration = (seconds) => {
  if (seconds < 60) return `${seconds} seconds`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed(1)} minutes`;
  const hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed(1)} hours`;
  const days = hours / 24;
  return `${days.toFixed(1)} days`;
};
