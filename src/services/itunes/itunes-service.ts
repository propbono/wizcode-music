import { Album, ItunesService } from "./interfaces";
import fetch from "cross-fetch";

export const ITUNES_URL =
  "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export const fetchAlbums = async (): Promise<Array<Album>> => {
  const response = await fetch(ITUNES_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch albums. Please try again later.");
  }

  const data: ItunesService = await response.json();
  return data.feed.entry;
};
