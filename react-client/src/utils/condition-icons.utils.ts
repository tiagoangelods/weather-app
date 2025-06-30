import React from 'react';
import {SunMoonIcon, CloudIcon, CloudRainIcon} from 'lucide-react'
export const getIconByCondition = (condition: string | null) => {
  switch (condition?.toLowerCase()) {
    case 'clear':
      return (React.createElement(SunMoonIcon));
    case 'clouds':
    case 'cloudy':
      return (React.createElement(CloudIcon));
    case 'rain':
      return (React.createElement(CloudRainIcon));
    default:
      return null; // Unknown condition icon
  }
}