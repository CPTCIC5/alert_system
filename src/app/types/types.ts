// types.ts (create this file in the root or inside a types directory)
export interface SpaceWeatherData {
    activityID: string;
    startTime: string;
    sourceLocation?: string; // Optional, since not all data has a source location
    note: string;
  }