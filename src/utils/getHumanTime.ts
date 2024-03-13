export const getHumanTime: (timestamp:number, timezone:number) => string = (timestamp, timezone) => {
  // Convert the timestamp to milliseconds and adjust for the timezone
  const date = new Date((timestamp + timezone) * 1000);

  // Extract the hours and minutes
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  // Format the hours and minutes as two-digit strings
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Return the formatted time
  return `${formattedHours}:${formattedMinutes}`;
}