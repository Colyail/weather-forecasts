import { getDayFromTimestamp } from './getDayFromTimestamp';

export interface MainForecast {
  day: string;
  weather: string;
  highestTemp: number;
  lowestTemp: number;
}

export const fiveDaysForecast: (data: any) => MainForecast[] = (data) => {
  const fiveDaysData = [];
  const timezone = data.city.timezone;
  for (let i = 7; i < data.list.length; i+=8) {
    const element = data.list[i];
    const dayName = getDayFromTimestamp(element.dt, timezone);
    const dayData = data.list.slice(i - 7, i + 1);
    const highestTemp = Math.max(...dayData.map((item: any) => item.main.temp));
    const lowestTemp =  Math.min(...dayData.map((item: any) => item.main.temp));
    fiveDaysData.push({
      day: dayName,
      weather: element.weather[0].main,
      highestTemp: highestTemp,
      lowestTemp: lowestTemp
    })
  }
  return fiveDaysData;
}