export const getDayFromTimestamp:(timestamp:number, timezone:number) => string = (timestamp, timezone) => {
  // Convert the timestamp to milliseconds and adjust for the timezone
  const date = new Date((timestamp + timezone) * 1000);

  // Create an array of day names
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get the day of the week
  const dayIndex = date.getUTCDay();

  // Return the day name
  return days[dayIndex];
}