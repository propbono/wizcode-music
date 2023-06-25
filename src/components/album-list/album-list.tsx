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
    if (albums) {
      setAlbumList(albums);
    }
  }, [albums, setAlbumList]);

  if (error) {
    return <div>Failed to fetch albums. Please try again later.</div>;
  }

  return (
    <>
      <h2>Top Albums</h2>
      <ol className="pure-grid-*">
        {albumList.map((album) => (
          <li key={album.title?.label}>
            <span>{album["im:name"]?.label}</span>
          </li>
        ))}
      </ol>
    </>
  );
};
