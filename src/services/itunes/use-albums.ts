import { useQuery } from "react-query";
import { fetchAlbums } from "./itunes-service";
import { Album } from "./interfaces";

export const useAlbums = () => {
  return useQuery<Array<Album>>("albums", fetchAlbums);
};
