import React from 'react';
import { ReactComponent as Clouds } from 'assets/weather-cloudy.svg';
import { ReactComponent as Clear } from 'assets/weather-sunny.svg';
import {ReactComponent as Thunderstorm } from 'assets/weather-lightning.svg';
import {ReactComponent as Drizzle } from 'assets/weather-hail.svg';
import {ReactComponent as Rain } from 'assets/weather-pouring.svg';
import {ReactComponent as Snow } from 'assets/weather-snowy.svg';
import {ReactComponent as Atmosphere } from 'assets/weather-fog.svg';

const SelectIcon = (weather: string) => {
  switch (weather) {
    case "Clouds":
      return <Clouds className="weatherIcon" />;
    case "Thunderstorm":
      return <Thunderstorm className="weatherIcon" />;
    case "Drizzle":
      return <Drizzle className="weatherIcon" />;
    case "Rain":
      return <Rain className="weatherIcon" />;
    case "Snow":
      return <Snow className="weatherIcon" />;
    case "Atmosphere":
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Dust":
    case "Ash":
    case "Squall":
    case "Tornado":
      return <Atmosphere className="weatherIcon" />;
      break;
    case "Clear":
      return <Clear className="weatherIcon" />;
      break;
    default:
      break;
  }
}

export default SelectIcon;