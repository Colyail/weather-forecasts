export const getFullTimeFormat: (date: Date) => string = (date) => {
  return date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0')
}

export const getMeridiemTimeFormat: (date: Date) => string = (date) => {
  // Get hours, minutes and seconds
  let hours = date.getHours();
  const minutes = date.getMinutes();

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