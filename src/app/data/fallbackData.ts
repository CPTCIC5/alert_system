import { SpaceWeatherData } from "../types/types";

export const fallbackCmeData: SpaceWeatherData[] = [
  {
    activityID: "1",
    startTime: "2024-01-01T00:00:00Z",
    sourceLocation: "N/A",
    note: "Dummy CME data",
  },
  {
    activityID: "2",
    startTime: "2024-01-02T00:00:00Z",
    sourceLocation: "N/A",
    note: "Another dummy CME event",
  },
];

export const fallbackFlareData: SpaceWeatherData[] = [
  {
    activityID: "1",
    startTime: "2024-01-01T00:00:00Z",
    note: "Dummy flare data",
  },
  {
    activityID: "2",
    startTime: "2024-01-02T00:00:00Z",
    note: "Another dummy flare event",
  },
];

export const fallbackStormData: SpaceWeatherData[] = [
  {
    activityID: "1",
    startTime: "2024-01-01T00:00:00Z",
    note: "Dummy storm data",
  },
  {
    activityID: "2",
    startTime: "2024-01-02T00:00:00Z",
    note: "Another dummy storm event",
  },
];