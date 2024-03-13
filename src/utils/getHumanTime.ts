import { TimeFormat } from '../redux/settingsSlice';

export const getHumanTime: (timestamp:number, timezone:number, type: TimeFormat) => string = (timestamp, timezone, type) => {
  // Convert the timestamp to milliseconds and adjust for the timezone
  const date = new Date((timestamp + timezone) * 1000);

  // Extract the hours and minutes
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  if (type === TimeFormat.Full) {
    // Format the hours and minutes as two-digit strings
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    // Return the formatted time
    return `${formattedHours}:${formattedMinutes}`;
  } else {
    // Convert 24-hour format to 12-hour format and set the AM/PM variable
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format hours and minutes as two-digit strings
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Combine hours, minutes and AM/PM
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
}