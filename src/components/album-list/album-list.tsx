import { atom, useRecoilState } from "recoil";
import { Album } from "../../services/itunes/interfaces";
import { useAlbums } from "../../services/itunes/use-albums";
import { useEffect } from "react";

export const albumListState = atom<Array<Album>>({
  key: "albumListState",
  default: [],
});

export const AlbumList: React.FC = () => {
  const [albumList, setAlbumList] = useRecoilState(albumListState);
  const { data: albums, error } = useAlbums();

  useEffect(() => {
    if (albums) setAlbumList(albums);
  }, [albums, setAlbumList]);

  return <h2>Top 100 Albums</h2>;
};
