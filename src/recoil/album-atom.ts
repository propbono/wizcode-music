import { atom } from "recoil";
import { Album } from "../services/itunes/interfaces";

export const albumListState = atom<Array<Album>>({
  key: "albumListState",
  default: [],
});

export const searchQueryState = atom<string>({
  key: "searchState",
  default: "",
});
