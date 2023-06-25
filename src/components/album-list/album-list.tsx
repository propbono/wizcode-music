import { atom, useRecoilState } from "recoil";
import { Album } from "../../services/itunes/interfaces";
import { useAlbums } from "../../services/itunes/use-albums";
import { useEffect } from "react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";

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
    <Section>
      <Container>
        <h2>Top Albums</h2>
        <ol className="">
          {albumList.map((album) => (
            <li key={album.title?.label}>
              <img src={album["im:image"]?.[0].label} />
              <span>{album["im:name"]?.label}</span>
              <span>{album["im:artist"]?.label}</span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
};
